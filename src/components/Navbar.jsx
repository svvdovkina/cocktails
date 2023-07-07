import { NavLink } from "react-router-dom"
import styled from 'styled-components'


const Navbar = ()=>{
    return <Wrapper>
        <div className="nav-center">
            <span className="logo">MixMaster</span>
                <div className="nav-links">
                    <NavLink className='nav-link' to='/'>Home</NavLink>
                    <NavLink className='nav-link' to='/newsletter'>Newsletter</NavLink>
                    <NavLink className='nav-link' to='/about'>About</NavLink>
                </div>
        </div>
    </Wrapper>
    
}

const Wrapper = styled.nav`
    background: white;
    .nav-center {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 50vw;
        max-width: 500px;
    };

    .logo {
        font-weight: 700;
        font-size: 2rem;
        color: #0b6c0b;
        letter-spacing: 2px;
    };

    .nav-links {
        margin: 20px 0;
        display: flex;
        flex-direction: column;
        gap: 15px;
    };

    .nav-link {
        text-decoration: none;
        color: #353535;
        font-size: 1.1rem;
        font-weight: 500;
        transition: linear 0.2s;
        letter-spacing: 2px;
    };

    .nav-link:hover {
        color: #12a212;
    }
    .active {
        color: #12a212;
    }
    @media (min-width: 768px) {
        .nav-center {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 0 auto;
            padding: 20px 0;
            width: 80vw;
            max-width: 700px;
            align-items: center;
        };

        .nav-links {
            margin: 0;
            display: flex;
            flex-direction: row;
            gap: 15px;
        };
    }
`

export default Navbar