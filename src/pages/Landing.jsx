import { useLoaderData } from "react-router-dom"
import axios from "axios"
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";

export const loader = async ({request})=>{
    const reqUrl = new URL(request.url);

    const searchTerm = reqUrl.searchParams.get("search") || "margarita";
    try {
        const resp = await axios.get(`${url}s=${searchTerm}`);
        return {drinks: resp.data.drinks, searchTerm}
    } catch (error) {
        return "error"
    }
}

const Landing = ()=>{
    const {drinks, searchTerm} = useLoaderData();

    return <>
        <SearchForm searchTerm={searchTerm}/>
        <CocktailList drinks={drinks}/>
    </>
    
}

export default Landing