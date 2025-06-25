import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FnolDetail from './pages/FnolDetail'; 
import FnolUpload from './pages/FnolUpload';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivateRoute from './components/PrivateRoute';

function LayoutWrapper({ children }) {
  const location = useLocation();
  const hideLayout = location.pathname === '/login' || location.pathname === '/signup';
  return (
    <>
      {!hideLayout && <Navbar />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}

function LogoutHandler() {
  React.useEffect(() => {
    fetch('http://localhost:8000/api/logout/', {
      method: 'POST',
      credentials: 'include',
    }).then(() => {
      window.location.href = '/login';
    });
  }, []);
  return null;
}

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/fnol/:fnolId" element={<PrivateRoute><FnolDetail /></PrivateRoute>} />
          <Route path="/fnol-upload" element={<PrivateRoute><FnolUpload /></PrivateRoute>} />
          <Route path="/logout" element={<LogoutHandler />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
