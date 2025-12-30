import React from "react";
import { Link } from "react-router-dom";

export default function Women() {
  return (
    <>
      <div>
        Women
        <button>
          {" "}
          <Link to="/"> Go Back</Link>
        </button>
      </div>
    </>
  );
}
