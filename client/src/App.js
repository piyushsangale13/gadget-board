import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
function App() {
  return (
    <div className="App">
     <Router>
        <Header />
        <Routes>
          {/* <Route path="/" element={<HomePage />}></Route>
          <Route path="/community" element={<PrivateRoute><CommunityPage /></PrivateRoute>}></Route> */}
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/forgot-password" element={<ForgotPasswordPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
