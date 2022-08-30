import './App.css';
import { Routes, Route } from "react-router-dom";
import LoginForm from './pages/LoginForm';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
