import { Form, redirect, useNavigation } from "react-router-dom"
import styled from "styled-components"

export const action = async ({request}) =>{
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data);

    //post requiest to actual api

    return redirect('/');
}

const Newsletter = ()=>{

    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    return <Wrapper><Form method="POST">
        <h4>Our newsletter</h4>
        {/*name*/}
        <div className="form-row">
            <label 
            htmlFor="name" 
            className="form-label">
                name
            </label>
            <input 
            type="text" 
            className="from-input" 
            required
            name="name" 
            id="name"  />
        </div>
         {/*last name*/}
         <div className="form-row">
            <label 
            htmlFor="lastName" 
            className="form-label">
                last name
            </label>
            <input 
            type="text" 
            className="from-input" 
            name="lastName" 
            id="lastName"  />
        </div>

        {/*email*/}
        <div className="form-row">
            <label 
            htmlFor="email" 
            className="form-label">
                email
            </label>
            <input 
            type="email" 
            className="from-input" 
            name="email" 
            id="email" 
            required />
        </div>
        <button 
        type="submit" 
        className="btn"
        disabled={isSubmitting}>
            {isSubmitting ? "Subscribing" : "Send me Newsletters"}
        </button>
    </Form>
    </Wrapper>
}

const Wrapper = styled.div`
    color: #0b6c0b;
    form {
        margin: 0 auto;
        background-color: white;
        padding: 20px;
        max-width: 400px;
        border-radius: 10px;
        box-shadow: 10px 10px 5px -10px rgba(0,0,0,0.3);
    }
    h4 {
        text-align: center;
        font-size: 1.5rem;
        margin: 0;
        margin-bottom: 15px;
        font-weight: 500;
        
    }

    .form-row {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    .form-label{
        text-transform: capitalize;
        font-size: 0.8rem;
        margin-bottom: 2px;
    }
    .from-input{
        height: 2rem;
        border: 1px solid #c3c2c2;
        border-radius: 5px;
        padding: 0 5px 0;
        font-size: 0.9rem;
        color: #444444;
        background-color: #f4f4f485;
    }

    .btn {
        margin-top: 10px;
        border: none;
        width: 100%;
        font-size: 1.1rem;
    }
`



export default Newsletter