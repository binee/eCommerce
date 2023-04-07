import { useState } from 'react'
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Dashboard from './admin/Dashboard';
import Summary from './admin/Summary';
import Product from './admin/Product'
import CreateProduct from './admin/CreateProduct';


function App() {
  return (
    <div className="App">
      <Layout/>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/aboutus" element={<About/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/admin" element={<Dashboard/>}>
            <Route path="products" element={<Product/>}>
              <Route path='createproduct' element={<CreateProduct/>}>Create Product</Route>
            </Route>
            <Route path="summary" element={<Summary/>}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  )
}

export default App
