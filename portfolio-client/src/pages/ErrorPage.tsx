import {Link} from "react-router-dom";

export const ErrorPage = () => {
    return (
        <section>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
                404 – Page Not Found
            </h1>
            <p className="text-base md:text-lg mb-6 max-w-md">
                Whoops! The page you’re looking for doesn’t exist or may have been moved.
            </p>
            <Link
                to="/"
                className="text-blue-600 dark:text-yellow-400 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-yellow-500 transition"
            >
                Return to Homepage
            </Link>
        </section>
    )
}