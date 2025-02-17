import { Navigate, Route, Routes } from "react-router-dom";

import CartProvider from "./context/CartContext";
import ProductsProvider from "./context/ProductContext";

import Layout from "./layout/Layout";
import PageNotFound from "./pages/404";
import CheckoutPage from "./pages/CheckoutPage";
import DetailsPage from "./pages/DetailsPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <Layout>
          <Routes>
            <Route index element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </ProductsProvider>
    </CartProvider>
  );
}

export default App;
