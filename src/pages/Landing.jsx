import { useLoaderData } from "react-router-dom"
import axios from "axios"
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";

export const loader = async ()=>{
    const searchTerm = "margarita";
    try {
        const resp = await axios.get(`${url}s=${searchTerm}`);
        return {drinks: resp.data.drinks, searchTerm}
    } catch (error) {
        return "error"
    }
}

const Landing = ()=>{
    const data = useLoaderData();
    console.log(data)

    return <>
        <SearchForm/>
        <CocktailList drinks={data.drinks}/>
    </>
    
}

export default Landing