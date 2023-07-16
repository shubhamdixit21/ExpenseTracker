import React from "react";

const ArrayUpdate = (Props) => {
  let data1 = "Shubham";
  return (
    <div>
      <h1>Meessage is {data1}</h1>
      <button
        onClick={() => {
          Props.data(data1);
        }}
      >
        Change Message
      </button>
    </div>
  );
};

export default ArrayUpdate;
