import React from "react";
import img from "../assets/main.jpg";
export default function MainComp() {
  return (
    <div className="MainComp">
      <div className="MainComp-img">
        <img src={img} alt="kk" width="100%" height="100%" />
      </div>
      ` <div className="main-title">
          BACK TO SCHOOL
          <p>With Stars</p>
        </div>`
    </div>
  );
}
