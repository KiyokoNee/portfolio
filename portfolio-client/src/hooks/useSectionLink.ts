import {useLocation, useNavigate} from "react-router-dom";

export const useSectionLink = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (targetSection: string) => {
        if(location.pathname !== "/"){
            sessionStorage.setItem("scrollTarget", targetSection);
            navigate("/");
        } else {
            const el = document.getElementById(targetSection);
            if (el) el.scrollIntoView({behavior: "smooth"});
        }
    }
}
