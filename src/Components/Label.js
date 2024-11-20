import React from "react";

function Label({ name, color }) {
  return (
    <div>
      <div
        className="px-[0.75rem] py-[0.5rem] lg:px-[1rem] lg:py-[0.5rem] w-fit rounded-[0.5rem]"
        style={{ backgroundColor: `var(${color})` }}
      >
        <h4 className="text-white">{name}</h4>
      </div>
    </div>
  );
}

export default Label;
