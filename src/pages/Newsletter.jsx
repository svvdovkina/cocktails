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
            className="form-input" 
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
            className="form-input" 
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
            className="form-input" 
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
    
    form {
        max-width: 400px;
    }
    h4 {
        text-align: center;
        font-size: 1.5rem;
        margin: 0;
        margin-bottom: 15px;
        font-weight: 500;
        
    }

    .btn {
        margin-top: 10px;
        width: 100%;
        font-size: 1.1rem;
    }
`



export default Newsletter