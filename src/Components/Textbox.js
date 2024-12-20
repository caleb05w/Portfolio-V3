import React from "react";
import Label from "../Components/Label";

function Textbox({ Title, Body, Body2, LabelName, LabelColor }) {
  return (
    <div>
      <div className="flex flex-col gap-[0.6rem] w-[100%] ">
        <Label name={LabelName} color={LabelColor} />
        <div className="flex flex-col gap-[0.1rem]">
          <h2>{Title}</h2>
          <div className="flex flex-col gap-[1rem]">
            <p>{Body} </p>
            <p>{Body2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Textbox;
