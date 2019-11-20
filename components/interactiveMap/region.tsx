import React, { useState } from "react";


const ownersArr = [
  "stark",
  "tyrell",
  "grayjoy",
  "lanister",
  "baratheon",
  "martell",
  ''
];

export default (Region: any) => () => {
  const [owner, setOwner] = useState("");
  return (
    <Region
      owner={owner}
      onClick={() =>
        setOwner((currentOwner: any) => {
          return ownersArr[
            (ownersArr.indexOf(currentOwner) + 1) % ownersArr.length
          ];
        })
      }
    />
  );
};
