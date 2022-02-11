import React from "react";
import ReactDOM from "react-dom";
export default Tick;

function Tick() {
  const element = (
    <div>
      <h2>It is {new Date().toLocaleTimeString()}</h2>      
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}
setInterval(Tick, 1000);
