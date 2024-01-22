import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { BrowserRouter } from "react-router-dom";


const Routes = () => {
  return (
    <BrowserRouter>
       <AuthRoutes/>
    </BrowserRouter>
  )
}

export default Routes