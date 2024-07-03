import { Outlet } from "react-router-dom";
import Navv from "./Navv";

function NavRoute() {
 
  return (
    <>
   <Navv/>
  <Outlet />

    </>
  )
 
}

export default NavRoute;