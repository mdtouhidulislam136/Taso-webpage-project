import React, { useContext } from 'react';
import {
  Routes,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Import React Customs Components
import NavbarMenu from "./routes/NavbarMenu";
import FrontPage from './routes/FrontPage';
import Membership from "./routes/Membership";
import News from "./routes/News";
import AdminNews from "./routes/admin/News";
import Proceedings from "./routes/Proceedings";
import Partners from "./routes/Partners";
import Contact from "./routes/Contact";
import Advances from "./routes/Advances";
import Footer from './routes/Footer';
import Feedback from './routes/Feedback';
import Login from "./routes/admin/Login";
import { AuthContext } from "./routes/admin/AuthContext";



export default function App() {

  const { currentUser } = useContext(AuthContext)
  const RequireAuth = ({ children }) => {
      return currentUser ? children : <Navigate to="/login" />
  }
  console.log(currentUser);
  return (
    <div className="App">
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="membership" element={<Membership />} />
        <Route path="news" element={<News />} />
        <Route path="proceedings" element={<Proceedings />} />
        <Route path="advances" element={<Advances />} />
        <Route path="contact" element={<Contact />} />
        <Route path="partners" element={<Partners />} />
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<RequireAuth><AdminNews /></RequireAuth>} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      <Feedback/>
      <Outlet />

     

        {/* Our supporter Partners */}
      <Footer />

    </div>
  );
}
