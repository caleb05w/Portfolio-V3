import React from "react";
import Label from "../Components/Label";

// export default MultiContentBox;
function MultiContentBox({
  Title,
  Reflection1,
  Reflection2,
  Reflection3,
  Body1,
  Body2,
  Body3,
  LabelName,
  LabelColor,
}) {
  return (
    <section>
      <div className="flex flex-col gap-[0.625rem]">
        <Label name={LabelName} color={LabelColor} />
        <h2>{Title}</h2>
        <div className="flex flex-col gap-[2rem]">
          <div className="">
            <h4>{Reflection1}</h4>
            <p>{Body1}</p>
          </div>
          <div className="">
            <h4>{Reflection2}</h4>
            <p>{Body2}</p>
          </div>
          <div className="">
            <h4>{Reflection3}</h4>
            <p>{Body3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MultiContentBox;
