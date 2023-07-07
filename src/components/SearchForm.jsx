/* eslint-disable react/prop-types */
import { Form, useNavigation } from "react-router-dom"
import styled from "styled-components"

const SearchForm = ({searchTerm})=>{
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    return <Wrapper>
            <Form>
                <input 
                className="form-input" 
                type="search" 
                name="search" 
                id="search"
                defaultValue={searchTerm} />
                <button className="btn" type="submit" disabled={isSubmitting}>Search</button>
            </Form>
        </Wrapper>
}

const Wrapper = styled.div`
    input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    form {
        display: grid;
        grid-template-columns: 1fr auto;
        margin: 0;
        margin-bottom: 30px;
    }
    .btn {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        height: 2rem;
    }
`

export default SearchForm