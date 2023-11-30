// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from "./components/Home";
import Orders from "./components/Orders";
import { useState } from "react";


function App() {

  const [orderList, setOrderlist] = useState([])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home setOrderlist={setOrderlist} />}
          />
          <Route path="/orders" element={<Orders orderList={orderList} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
