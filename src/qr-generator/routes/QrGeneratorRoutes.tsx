import { Routes, Route, Navigate } from 'react-router-dom';
import { QrGeneratorPage } from '../pages/QrGeneratorPage';
export const QrGeneratorRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<QrGeneratorPage />} />

        {/* Cuando no existe la ruta redirecciona a / */}
        <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
