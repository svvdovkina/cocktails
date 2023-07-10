import { useLoaderData } from "react-router-dom"
import axios from "axios"
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import { useQuery } from "@tanstack/react-query";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";

const searchCocktailsQuery = (searchTerm)=>{
    return {
        queryKey: [['search'], searchTerm || 'margarita'],
        queryFn: async ()=>{
            const response = await axios.get(`${url}s=${searchTerm}`);
            return response.data.drinks
        }
    }
}

export const loader = (queryClient) => async ({request})=>{
    const reqUrl = new URL(request.url);

    const searchTerm = reqUrl.searchParams.get("search") || "margarita";
    
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    
    return {searchTerm}
}

const Landing = ()=>{
    const { searchTerm} = useLoaderData();

    const {data: drinks, isLoading} = useQuery(searchCocktailsQuery(searchTerm));
    
    if (isLoading) {
        return <h4>Loading...</h4>
    }
    
    return <>
        <SearchForm searchTerm={searchTerm}/>
        <CocktailList drinks={drinks}/>
    </>
    
}

export default Landing