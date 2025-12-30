import React from "react";

function MensWear() {
  //loops js
  const ladiesWear = [
    {
      productName: "Varanga 1",
    },
    {
      productName: "Varanga 2",
    },
    {
      productName: "Varanga 3",
    },
    {
      productName: "Varanga 4",
    },
    {
      productName: "Varanga 5",
    },
    {
      productName: "Varanga 6",
    },
    {
      productName: "Varanga 7",
    },
  ];
  return (
    <>
      <div style={{ display: "flex" }}>
        {ladiesWear.map((ele) => {
          console.log(ele, "inside element items");

          return <div class="card">{ele.productName}</div>;
        })}
      </div>
    </>
  );
}

export default MensWear;