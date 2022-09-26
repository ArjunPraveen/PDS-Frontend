import logo from './logo.svg';
import { BrowserRouter as BrowserRouter,Router, Routes, Route } from 'react-router-dom'
import './App.css';
//import Layout from './components/layout';
import Dashboard from './pages/dashboard'
import PatientList from './pages/patientsList';
import Register from './pages/register'
import Login from './pages/login'

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="patientList" element={<PatientList/>}/>
        <Route path="/login" element={<Login/>}/>
          
      </Routes>

    </BrowserRouter>
  );
}

export default App;
