import React from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./components/Home"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Supplements from "./components/Supplements"
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
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;