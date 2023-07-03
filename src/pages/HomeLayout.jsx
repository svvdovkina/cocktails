
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const HomeLayout = ()=>{
    return <div>
        <nav> 
            <Navbar/>
        </nav>
        <Outlet/>
        <footer>Footer</footer>
        
    </div>
}

export default HomeLayout