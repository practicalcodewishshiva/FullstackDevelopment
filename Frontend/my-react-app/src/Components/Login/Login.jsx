import axios from "axios";
import React from "react";
import { useState } from "react";

export default function Login() {
  const [email, updateEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(event) {
    debugger;
    const value = event.target.value;
    updateEmail(value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
    console.log("password ", event.target.value);
  }

  async function handleLogin() {
    // step 1 api route http://localhost:8000/login
    // Step 2 axios use chei manam api call cheddam
    // Step 3 response oka state create cheddam
    const result = await axios.post("http://localhost:8000/login", {
      email: email,
      password: password,
      third: "hey this is third",
    });
    console.log(result);
  }

  // 100% async await promises or callbacks
  return (
    <>
      <div>Login</div>
      {name}
      <input type="email" onChange={handleEmail} />
      UserName
      <input type="password" onChange={handlePassword} />
      Password
      <button onClick={handleLogin}>Login</button>
    </>
  );
}

// 2 scenarios frontend
// backend
