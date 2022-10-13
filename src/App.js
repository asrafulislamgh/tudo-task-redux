import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import React from 'react';
import './App.css';
import Login from "./components/Login"
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import EmailCards from './components/EmailCards';


function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Login />}></Route>
          <Route path='/login' element={<Login />}></Route>

          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/emailcards' element={<EmailCards />}></Route>
          <Route path='*' element={<Navigate to="/" />}></Route>
        </Routes>
      </BrowserRouter>

    </Container>
  );
}

export default App;
