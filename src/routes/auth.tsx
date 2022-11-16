import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

const Loader= lazy(()=> import('../config/Loader'));
const LoginPage = lazy(()=> import('../views/auth/views/Login'));
const RegisterationPage = lazy(()=>import('../views/auth/views/Register'))
const Project= lazy(()=> import ('../views/projects/view/Project'));
const AuthRoute=()=> {
    return (
        <>
            <BrowserRouter>
            <Suspense fallback={<Loader/>}>
                    <Routes>

                        {/* authentication route */}
                        <Route path="" element={<LoginPage />} />
                        <Route path="/register" element = {<RegisterationPage/>} />
                        <Route path="*" element={<Navigate to="/"/>} />
                        

                        {/* project route */}
                        <Route path="/project" element= {<Project />}/>

                        {/* users routes */}

                    </Routes>
                </Suspense>   
            </BrowserRouter>
        </>
    );
}


export default AuthRoute