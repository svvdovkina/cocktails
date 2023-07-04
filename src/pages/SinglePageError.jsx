import { useRouteError } from "react-router-dom"

const SinglePageError = ()=>{
    const error = useRouteError();
    return <p><b>Error:</b> {error.message}</p>
}

export default SinglePageError