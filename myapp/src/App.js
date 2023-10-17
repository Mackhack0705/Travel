import "./App.css";
import FeatureSearch from "./pages/FeatureSearch";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login-form' element={<LoginForm />} />
                <Route path='/signup-form' element={<SignUp />} />
                <Route path="/flight-Search" element={<FeatureSearch />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
