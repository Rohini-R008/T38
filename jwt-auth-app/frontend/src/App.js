import React from "react";
import Register from "./Register";
import Login from "./Login";
import Protected from "./Protected";

function App() {
  return (
    <div>
      <h1>JWT Auth App</h1>
      <Register />
      <Login />
      <Protected />
    </div>
  );
}

export default App;
