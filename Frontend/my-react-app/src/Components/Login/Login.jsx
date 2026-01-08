import axios from "axios";
import React from "react";
import { useState } from "react";

export default function Login() {
  const [userSignUpDetails, setUserSignUpDetails] = useState({
    userName: "",
    password: "",
    conformPassword: "",
    captcha: "",
    fullName: "",
  });

  function handleuserSignUpDetails(event) {
    const { name, value } = event.target;
    console.log(name, value, "name value");
    setUserSignUpDetails((previousUserSignUpDetails) => ({
      ...previousUserSignUpDetails,
      [name]: value,
    }));
  }

  async function handleLogin() {
    debugger
    const { userName, password, conformPassword, captcha, fullName } =
      userSignUpDetails;
    if (!(userName && password && conformPassword && captcha && fullName)) {
      alert("you have to enter all the fileds");
    }
    const result = await axios.post(
      "http://localhost:8000/user-signup",
      userSignUpDetails
    );
    console.log(result, "result");
  }

  return (
    <>
      <div>Login</div>
      {name}
      UserName
      <input type="email" name="userName" onChange={handleuserSignUpDetails} />
      Password
      <input
        type="password"
        name="password"
        onChange={handleuserSignUpDetails}
      />
      FullName
      <input
        type="fullName"
        name="fullName"
        onChange={handleuserSignUpDetails}
      />
      Confirm Password
      <input
        type="text"
        name="conformPassword"
        onChange={handleuserSignUpDetails}
      />
      <input type="text" name="captcha" onChange={handleuserSignUpDetails} />
      Captcha
      <button onClick={handleLogin}>Login</button>
    </>
  );
}

// 2 scenarios frontend
// backend

// const data = {
//   name:"shiva",
//   location:"hyd"
// }

// ...data

// referbce vs value


// loops