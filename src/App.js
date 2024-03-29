import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/Home";
import TeachersPage from "./pages/Teachers";
import FavoriteTeachersPage from "./pages/Favorites";
// import PublicRoute from "./components/PublicRoute/publicRoute";
import PrivateRoute from "./components/PrivateRoute/privateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route index element={<HomePage />} />
          <Route path="teachers" element={<TeachersPage />} />

          {/* Private Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="favorites" element={<FavoriteTeachersPage />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer autoClose={2500} />
    </>
  );
}

export default App;
