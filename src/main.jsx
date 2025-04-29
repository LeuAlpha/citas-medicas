import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Formulario from './pages/Formulario';
import Citas from './pages/Citas';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/formulario" element={<Formulario />} />
    <Route path="/citas" element={<Citas />} />
  </Routes>
</BrowserRouter>

