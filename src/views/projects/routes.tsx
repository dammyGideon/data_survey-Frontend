import React, { lazy, Suspense } from "react";
import { BrowserRouter,Navigate,Route,Routes } from "react-router-dom";
import Project from "./view/Project";

const Loader=  lazy(()=>import("../../config/Loader"));

 const ProjectRoute =() => {
    return (
        <BrowserRouter>
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route path="/project" element={<Project />}></Route>
            </Routes>
        </Suspense>
        </BrowserRouter>
    )
}

export default ProjectRoute