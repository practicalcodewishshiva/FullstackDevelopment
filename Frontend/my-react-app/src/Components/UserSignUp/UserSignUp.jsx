import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserSignUp() {
  const navigate = useNavigate();
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
    debugger;
    const { userName, password, conformPassword, captcha, fullName } =
      userSignUpDetails;
    if (!(userName && password && conformPassword && captcha && fullName)) {
      alert("you have to enter all the fileds");
    }
    const result = await axios.post(
      "http://localhost:8000/user-signup",
      userSignUpDetails
    );

    //     frontend request ------------ backend ------

    //     response.
    //     {
    // username:"sriram",
    // isAutheticated:true,
    // isLoggedIn:true
    //     }

    // type and value

    // string  "sriram"
    // boolean true
    // null  null
    // phone  77777
    if (result.data.isLoggedIn === true) {
      navigate("/login");
      console.log(result, "result");
    }
  }

  return (
    <>
      <div>
        FullName
        <div class="form-group">
          <label for="exampleInputEmail1">UserName</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="userName"
            onChange={handleuserSignUpDetails}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            onChange={handleuserSignUpDetails}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">FullName</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            name="fullName"
            onChange={handleuserSignUpDetails}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="conformPassword"
            onChange={handleuserSignUpDetails}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Captcha</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="captcha"
            onChange={handleuserSignUpDetails}
          />
        </div>
        <button
          style={{
            padding: "5px",
            border: "2px solid green",
            borderRadius: " 8px",
            marginTop: "10px",
            width: "203px",
          }}
          onClick={handleLogin}
        >
          Signup
        </button>
      </div>
    </>
  );
}
