import HomePage from "@/features/home";
import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/main-layout";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
