import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import ContactBookings from "./pages/ContactBookings";
import MenuManagement from "./pages/MenuManagement";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./layouts/AdminLayout";
import PackagesAdmin from "./pages/PackagesAdmin";
import GalleryManagement from "./pages/GalleryManagement";
import PopupManager from "./pages/PopupManager";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        
        <Route index element={<ContactBookings />} />

        <Route path="contacts" element={<ContactBookings />} />
        <Route path="menu" element={<MenuManagement />} />
        <Route path="gallery" element={<GalleryManagement />} />
        <Route path="popup" element={<PopupManager />} />
        <Route path="packages" element={<PackagesAdmin />} />

        <Route path="catering" element={<p>Catering admin coming next</p>} />
        <Route path="stats" element={<p>Stats coming next</p>} />
      </Route>

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
