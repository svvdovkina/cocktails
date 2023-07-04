import { Link } from "react-router-dom";
import styled from "styled-components"

// eslint-disable-next-line react/prop-types
const CocktailCard = ({drink})=>{
    // eslint-disable-next-line react/prop-types
    const {idDrink, strDrinkThumb, strDrink, strAlcoholic, strGlass} = drink;
    return <Wrapper>
        <img src={strDrinkThumb} alt="" />
        <div className="info">
            <div className="text">
                <h3>{strDrink}</h3>
                <p className="glass">{strGlass}</p>
                <p className="alco">{strAlcoholic}</p>  
            </div>
            <Link  className="btn" to={`/cocktail/${idDrink}`}>Details</Link>
        </div>
        
    </Wrapper>
}

const Wrapper = styled.div`
    width: 250px;
    height: 450px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 10px 10px 5px -10px rgba(0,0,0,0.3);

    &:hover{
        box-shadow: 10px 15px 20px -20px rgba(0,0,0,0.75);
    }

    img{
        width: 250px;
        height: 65%;
        overflow: hidden;
        border-radius: 5px 5px 0 0;
    }
    .info {
        height: 35%;
        padding: 10px 20px 15px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }

    .glass{
        color: #3f3f3f;
        margin-bottom: 3px;
    }
    .alco {
        font-size: 0.7rem;
        color: grey;
    }
    p{
        margin: 0;
        padding:0;
    }
    h3{
        margin: 0 0 10px 0;
        padding:0;
    }
    .btn {
        text-decoration: none;
        background-color: #12a212;
        padding: 7px 20px;
        color: white;
        border-radius: 5px;
        box-shadow: inset -1px -1px 3px 1px rgba(0,0,0,0.2);
    }
    .btn:hover{
        background-color: #0b6c0b;
    }
`

export default CocktailCard