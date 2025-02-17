import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { ChakraProvider } from '@chakra-ui/react'; // Importando ChakraProvider
import './App.css';
import Register from './Components/Login/Registro'; 
import Login from './Components/Login/Login';
import LoginAdm from './Components/Login/LoginAdm';
import Step1 from './Step1';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/registro" element={<Register />} /> 
          <Route path="/LoginAdm" element={<LoginAdm />} />
          
          {/* Envolvendo APENAS Step1 com ChakraProvider */}
          <Route path="/Step1" element={
            <ChakraProvider>
              <Step1 />
            </ChakraProvider>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
