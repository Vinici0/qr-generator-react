import { Routes, Route } from "react-router-dom";
import { QrGeneratorRoutes } from "../qr-generator/routes/QrGeneratorRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* TODO: Login and Register */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* TODO: QR Principal */}
      <Route path="/*" element={<QrGeneratorRoutes />} />
    </Routes>
  );
};
