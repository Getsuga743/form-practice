import "./App.css";

import React, { useState } from "react";
import { Login } from "./pages/Login/Login";
import "./App.css";
import { Signup } from "./pages/Signup/Signup";

export default function App() {
  const [isSignup, setIsSignup] = useState(true);
  const toogleForm = () => {
    if (isSignup) {
      setIsSignup(false);
    } else {
      setIsSignup(true);
    }
  };
  return (
    <div className="App">
      {isSignup ? (
        <Login toggleForm={toogleForm} />
      ) : (
        <Signup toggleForm={toogleForm} />
      )}
    </div>
  );
}
