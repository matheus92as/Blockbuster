import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailsPage from "../pages/Details/DetailsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";

const Router = () => {
    return (
        <Routes>
          <Route index element={<Home />} />
          <Route path="/page/:page" element={<Home />} />
          <Route path="/detalhes/:id" element={<DetailsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>   
    );
  };
  export default Router;