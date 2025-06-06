import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error("Error fetching message:", err));
  }, []);

  return (
    <div>
      <h1>React + Node.js + PostgreSQL</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
