/* eslint-disable react/prop-types */
import CocktailCard from "./CocktailCard";
import styled from "styled-components"


const CocktailList = ({drinks})=>{

    if (!drinks) {
        return <h3>No matching cocktaill found...</h3>
    }

    return <Wrapper>
        {drinks.map((drink)=>{
            return <CocktailCard key={drink.idDrink} drink={drink}/>
        })}
    </Wrapper>
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 30px;
    flex-wrap: wrap;
`

export default CocktailList