import React from "react";
import Label from "../Components/Label";

function Textbox({ Title, Body, Body2, LabelName, LabelColor }) {
  return (
    <div>
      <div className="flex flex-col gap-[0.625rem]">
        <Label name={LabelName} color={LabelColor} />
        <h2>{Title}</h2>
        <div className="flex flex-col gap-[1.2rem]">
          <p>{Body} </p>
          <p>{Body2}</p>
        </div>
      </div>
    </div>
  );
}

export default Textbox;
