import React from "react";
import * as regions from "./regions";
import withOwner from './region'

const maped = Object.values(regions).map(withOwner);
import './styles.css';

export default () => {
  return (
    <div style={{ position: "relative", display: 'block' }}>
      <img src="/images/board.jpg" style={{ display: 'block', maxWidth: '100%', height: 'auto' }} />
      <div style={{ position: "absolute", top:0, left: 0, right:0, bottom: 0 }}>
        <svg
          style={{width: '100%', height: '100%'}}
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
