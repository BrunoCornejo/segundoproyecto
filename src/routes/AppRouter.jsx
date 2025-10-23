import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";


export default function AppRouter() {
    return (
        <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
        </>
    );
}