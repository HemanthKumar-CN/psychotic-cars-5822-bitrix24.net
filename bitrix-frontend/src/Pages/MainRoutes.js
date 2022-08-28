import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import UserLogin from "./Login";
import { MainPage } from "./Main Page/MainPage";
import { Marketing } from "./Marketing";
import { SitesStore } from "./Sites and Store/SitesStore";
import { Company } from "./Company/Company";
export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/stream" element={<MainPage />} />
      <Route path="/marketing" element={<Marketing />} />
      
    </Routes>
  );
};
