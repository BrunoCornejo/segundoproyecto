import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import Adminpage from "../pages/Adminpage.jsx";
import Error404Page from "../pages/Error404Page.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import Header from "../components/Header.jsx";
import Footer from "./components/Footer.jsx";


export default function AppRouter() {
    return (
        <>
         <Header/>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/registro" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/Register" element={<RegisterPage />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Admin" element={<Adminpage />} />
            {/* <Route path="/Acerca" element={<AcercaPage />} /> */}
            <Route path="*" element={<Error404Page />} />
            
        </Routes>
        <Footer/>
        </>
    );
}