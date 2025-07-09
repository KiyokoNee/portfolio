import {Link} from "react-router-dom";

export const ErrorPage = () => {
    return (
        <>
            <h2>Whoops! The page you are looking for couldn't be found.</h2>
            <p>Click <Link to={"/"}>here</Link> to return to the main page.</p>
        </>
    )
}