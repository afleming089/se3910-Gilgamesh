import Header from "./components/header.jsx";
import Login from './pages/Login'
import Dashboard from "./pages/Dashboard.jsx";
import Saved from "./pages/Saved.jsx";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes> 
        <Route path="/login" element = {<Login/>}/>
        <Route path="/" element={<Dashboard />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </div>
  );
}

export default App;
