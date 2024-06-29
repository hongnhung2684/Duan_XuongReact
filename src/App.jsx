import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import instance, { getProducts } from "./axios/index";
import AuthForm from "./components/AuthForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Dashboard from "./pages/admin/Dashboard";
import ProductForm from "./components/ProductForm";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import PrivateRoute from "./pages/PrivateRoute";
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutClient from "./layouts/LayoutClient";

function App() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleRemove = (id) => {
    console.log(id);
    (async () => {
      try {
        if (confirm("Are yout sure?")) {
          await instance.delete(`/products/${id}`);
          const newData = products.filter((item) => item.id !== id && item);
          setProducts(newData);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <>
      <Header />
      <main>
        <Routes>
          {/* path for client */}
          <Route path="/" element={<LayoutClient />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/product-detail/:id" element={<ProductDetail />} />
          </Route>
          {/* <Route path="/about" element={<About />} /> */}

          {/* path for admin */}
          <Route path="/admin" element={<PrivateRoute />}>
            <Route path="/admin" element={<LayoutAdmin />}>
              <Route index element={<Dashboard />} />
              <Route path="/admin/product-add" element={<ProductForm />} />
              <Route path="/admin/product-edit/:id" element={<ProductForm />} />
            </Route>
          </Route>

          {/* path empty */}
          <Route path="/register" element={<AuthForm isRegister />} />
          <Route path="/login" element={<AuthForm />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
