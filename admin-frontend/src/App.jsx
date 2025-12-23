import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import ContactBookings from "./pages/ContactBookings";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./layouts/AdminLayout";
import PackagesAdmin from "./pages/PackagesAdmin";


function App() {
  return (
    <BrowserRouter>
      <Routes>
  
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >

          <Route index element={<p>Select an option above</p>} />

        
          <Route path="contacts" element={<ContactBookings />} />

          <Route path="catering" element={<p>Catering admin coming next</p>} />
          <Route path="stats" element={<p>Stats coming next</p>} />
           <Route path="packages" element={<PackagesAdmin />} />
        </Route>


        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
