
import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../components/Navbar"
import styled from "styled-components"

const HomeLayout = ()=>{
    const navigation  = useNavigation();
    const isPageLoading = navigation.state === 'loading';

    return <>
        <Navbar/>
        <Wrapper>
            {isPageLoading ? 
            <p>Loading...</p>
            :
            <Outlet/>
            }
        </Wrapper>
        
        <footer>Footer</footer>
        
    </>
}

const Wrapper = styled.div`
  max-width: 80%;
  margin: 50px auto 0;

`


export default HomeLayout