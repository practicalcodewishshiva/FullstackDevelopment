import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function MyntraDashboard() {
  async function getUserDetails() {
    try {
      const url = await axios.get("https://fakestoreapi.com/products");

      if (response) {
        function onfulfilled() {}
      } else if (reject) {
        function onrejected() {}
      }
      const response = await url.data;
      console.log(response, "response");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <div>
        MyntraDashboard
        <ol style={{ display: "flex", gap: "15px", listStyle: "none" }}>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            {" "}
            <Link to="/women">Women</Link>
          </li>
          <li>Kids</li>

          <button onClick={getUserDetails}>GetUserDetails</button>
        </ol>
      </div>
    </>
  );
}
