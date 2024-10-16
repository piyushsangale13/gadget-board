import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import Map from './components/Map';
import HomePage from './components/home/HomePage';
import LandingPage from './components/landing/LandingPage';
import GroupsPage from './components/groups/GroupsPage';
import ProfilePage from './components/ProfilePage';
function App() {
  return (
    <div className="App">
     <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>}></Route>
          <Route path="/group" element={<PrivateRoute><GroupsPage /></PrivateRoute>}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/forgot-password" element={<ForgotPasswordPage />}></Route>
          <Route path="/map" element={<PrivateRoute><Map /></PrivateRoute>}></Route>
          <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
