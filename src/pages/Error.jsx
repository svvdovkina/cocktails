import styled from "styled-components"
import { Link, useRouteError } from "react-router-dom"
import voidImg from "../assets/void.svg"
import wrongImg from "../assets/wrong.svg"

const Error = ()=>{
    const error = useRouteError();
    if (error.status === 404){
        return <Wrapper>
            <img src={voidImg} alt="" />
            <h4>(404) This page does not exist...</h4>
            <p>Please return to the <Link to="./">Home page</Link></p>
        </Wrapper>
    }

    return <Wrapper>
        <img src={wrongImg} alt="" />
        <h4>Something went wrong...</h4>
        <p>Please return to the <Link to="./">Home page</Link></p>
    </Wrapper>
    
    
}

const Wrapper = styled.div`
    text-align: center;
    margin-top: 50px;
    img {
        width: 300px;
        max-width: 80%
    }
    h4{
        font-size: 1.5rem;
    }
    a{
        text-decoration: none;
        color: #0b6c0b;
    }
`

export default Error