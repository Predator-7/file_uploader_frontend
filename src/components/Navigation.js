import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";
import LoginComp from "./Login/LoginComp";
import SignupPage from "./Login/SignupPage";
import DashboardComp from "./Dashboard/DashboardComp";
import PdfViewer from "./PdfViewer/PdfViewer";
const Navigation = () => {
    const [userData, setUserData] = useContext(UserContext) ;
    const navigate = useNavigate();
    return (
    <Routes>
        <Route path="/" element={<LoginComp />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
            path="/dashboard"
            element={
                userData && userData["id"] ? (
                    <DashboardComp />
                ) : (
                    <Navigate  to='/' replace />
                )
            }
        />
        <Route path="/pdfviewer" element={<PdfViewer />} />
    </Routes>);
};
export default Navigation;
