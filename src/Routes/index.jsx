import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from '../hooks/auth'

const Routes = () => {
  const { user } = useAuth();
  return (
    <BrowserRouter>
       { user ? <AppRoutes/> : <AuthRoutes/>}
    </BrowserRouter>
  )
}

export default Routes