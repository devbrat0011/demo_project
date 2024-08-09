import { Navigate } from "react-router-dom";
import { useAuth } from "./privateRoute";

const RequireAuth = ({ children }) => {
    const auth = useAuth();
    const user = localStorage.getItem("user");
    if (auth && !auth.user && !user) {
        return <Navigate to="/login" />
    }
    return children;
}

export default RequireAuth;