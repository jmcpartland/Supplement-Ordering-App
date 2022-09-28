import React from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./components/Home"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Supplements from "./components/Supplements"
import SupplementForm from "./components/SupplementForm"
import OrderForm from "./components/OrderForm"
import Orders from "./components/Orders"
import { UserProvider } from "./context/user"


function App(props) {

  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/supplements" element={<Supplements />} />
          <Route exact path="/supplement-form" element={<SupplementForm />} />
          <Route exact path="/order-form" element={<OrderForm />} />
          <Route exact path="/orders" element={<Orders />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;