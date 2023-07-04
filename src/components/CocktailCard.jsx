import styled from "styled-components"

// eslint-disable-next-line react/prop-types
const CocktailCard = ({drink})=>{
    // eslint-disable-next-line react/prop-types
    const {strDrinkThumb, strDrink} = drink;
    return <Wrapper>
        <img src={strDrinkThumb} alt="" />
        <p>{strDrink}</p>
    </Wrapper>
}

const Wrapper = styled.div`
    img{
        width:300px;
    }
    p{
        text-align: center;
    }
`

export default CocktailCard