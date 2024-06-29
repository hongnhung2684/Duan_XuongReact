import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./contexts/ProductContext.jsx";
const taisan = [
  {
    id: 1,
    name: "Tivi",
    price: 1000,
  },
  {
    id: 2,
    name: "Tu lanh",
    price: 2000,
  },
];
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
