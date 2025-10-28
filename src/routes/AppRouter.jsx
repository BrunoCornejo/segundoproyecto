import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import Error404Page from "../pages/Error404Page.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";


export default function AppRouter() {
    return (
        <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/registro" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Error404Page />} />
        </Routes>
        </>
    );
}