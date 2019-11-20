import React from "react";
import * as regions from "./regions";
import withOwner from './region'

const maped = Object.values(regions).map(withOwner);

import './styles.css';

export default () => {
  return (
    <div style={{ position: "relative" }}>
      <img src="/images/board.jpg" style={{ position: "absolute" }} />
      <div style={{ position: "absolute" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1464px"
          height="2174px"
          viewBox="0 0 1464 2175"
        >
          {maped.map((Comp,i) => <Comp key={i}/>)}
        </svg>
      </div>
    </div>
  );
};
