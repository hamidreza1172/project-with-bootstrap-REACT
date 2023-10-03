import "./footer.css";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
export default function Footer() {
  return (
    <div className="parent ">
      <div className="row  container">
        <div className=" mt-5 footer ">
       
          <div className=" d-flex flex-column mb-2 justify-content-center align-items-center">
            <p>
              WELLCOME TO<span className="display-4 fw-bolder brand">ElectroLand</span>
            </p>
            <p>
              develop by <span className=" fw-bolder">hamidreza hadi</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
