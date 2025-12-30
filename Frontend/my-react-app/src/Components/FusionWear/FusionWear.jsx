import "./FusionWear.css";

function FusionWear({ userName }) {
  console.log("props, ", userName);
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
      <div className="flex-container">
        <h2>{userName}</h2>
        {ladiesWear.map((ele) => {
          console.log(ele, "inside element items");

          return <div class="fusionClassName">{ele.productName}</div>;
        })}
      </div>
    </>
  );
}

export default FusionWear;
