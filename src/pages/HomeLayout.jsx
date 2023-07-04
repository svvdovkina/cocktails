
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import styled from "styled-components"

const HomeLayout = ()=>{
    return <>
        <Navbar/>
        <Wrapper>
            <Outlet/>
        </Wrapper>
        
        <footer>Footer</footer>
        
    </>
}

const Wrapper = styled.div`
  max-width: 80%;
  margin: 50px auto 0;

`


export default HomeLayout