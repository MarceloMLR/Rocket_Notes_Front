import AppRoutes from "./app.routes";
import AuthRoutes from "./app.routes";
import { BrowserRouter } from "react-router-dom";


const Routes = () => {
  return (
    <BrowserRouter>
        <AppRoutes/>
    </BrowserRouter>
  )
}

export default Routes