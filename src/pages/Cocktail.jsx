import { useLoaderData, Link } from "react-router-dom"
import axios from "axios";
import styled from "styled-components"
import { useQuery } from "@tanstack/react-query";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php";

const searchSingleCocktailQuery = (id)=>{
    return {
        queryKey: [['searchById'], id || ''],
        queryFn: async ()=>{
            const data = await axios.get(`${url}?i=${id}`);
            return data.data.drinks
        }
    }
}

export const loader = (queryClient)=> async({params}) =>{
    const id = params.id;

    await queryClient.ensureQueryData(searchSingleCocktailQuery(id));

    return {id}
}

const Cocktail = ()=>{
    const {id} = useLoaderData();

    const {data} = useQuery(searchSingleCocktailQuery(id));
    
    if (!data) {
        return <h3>No info for the cocktail... Sorry!</h3>
    }

    const drink = data[0];

    const {
        strDrinkThumb, 
        strDrink, 
        strAlcoholic,
        strCategory, 
        strGlass,
        strInstructions
    } = drink;

    const ingridients = Object.keys(drink).filter(key=>{
        return key.startsWith("strIngredient") && drink[key];
    }).map((key)=>drink[key]);

    const measures = Object.keys(drink).filter(key=>{
        return key.startsWith("strMeasure") && drink[key];
    }).map((key)=>drink[key].trim());

    let ingridientsFull = [];
    for (let i = 0; i < ingridients.length; i++) {
        ingridientsFull.push(`${ingridients[i]} ${measures[i]||''}`);      
    }

    ingridientsFull = ingridientsFull.join(', ');

    //console.log(ingridients, measures, ingridientsFull);
    return <Wrapper>
        <h1>{strDrink}</h1>
        <div className="description">
            <div className="img">
                <img src={strDrinkThumb} alt="" />
            </div>
            <div className="drink-info">
                <p>
                    <span className="drink-data">name: </span>
                    {strDrink}
                </p>
                <p>
                    <span className="drink-data">category: </span>
                    {strCategory}
                </p>
                <p>
                    <span className="drink-data">info: </span>
                    {strAlcoholic}
                </p>
                <p>
                    <span className="drink-data">glass: </span>
                    {strGlass}
                </p>
                <p>
                    <span className="drink-data">ingridients: </span>
                    {ingridientsFull}
                </p>
                <p>
                    <span className="drink-data">instructions: </span>
                    <span id="instructions">{strInstructions}</span>
                </p>
            </div>
        </div>
        <Link className="btn" to='/'>Back to list</Link>
        
    </Wrapper>
}

const Wrapper = styled.section`
    margin-bottom: 40px;
    .drink-data {
        background-color: #18c818;
        padding: 2px;
        padding-left: 6px;
        border-radius: 5px;
        margin-right: 5px;
        text-transform: capitalize;
        color: #353535;
        font-size: 0.8rem;
    }

    .img {
        display: flex;
        align-items: center;
    }
    img{
        width: 250px;
     }

    .drink-info p{
        color: #353535;
        font-weight: 500;
    }

    #instructions {
        font-weight: 400;
        color: #545454;
        line-height: 1.4rem;
    }

    .description {
        margin-bottom: 30px;
    }


    @media (min-width: 768px) {
        .description {
            display: flex;
            gap: 40px;
    }
    }
`

export default Cocktail