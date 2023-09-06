import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages";
export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />

      {/* Si no  existe la ruta redirecciona a login */}
      <Route path="/*" element={<Navigate to="/login/login" />} />
    </Routes>
  );
};
