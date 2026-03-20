import React from "react";
import axios from "axios";

function Protected() {
  const accessProtected = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.get("http://localhost:5000/protected", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      alert(res.data.message + " User: " + res.data.user.username);
    } catch (err) {
      alert("Access denied!");
    }
  };

  return (
    <div>
      <h2>Protected Route</h2>
      <button onClick={accessProtected}>Access Protected Data</button>
    </div>
  );
}

export default Protected;