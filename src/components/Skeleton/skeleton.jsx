import { Outlet, Link } from "react-router-dom";
import Navbar from "../NavBar/navbar";
import Footer from "../Footer/footer";
import Home from "../Home/home";


export default function Skeleton(){
    return <>
       <Navbar/>
       <Outlet/>
       <Footer/>
    </>
}