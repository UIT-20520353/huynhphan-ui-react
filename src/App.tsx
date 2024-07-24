import MainLayout from "@/components/layouts/main-layout";
import ProductListWithCategory from "@/features/category";
import HomePage from "@/features/home";
import ProductDetail from "@/features/product";
import React from "react";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        \
        <Route path="category/:id" element={<ProductListWithCategory />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
