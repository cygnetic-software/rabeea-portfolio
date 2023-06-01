import React from "react";
import classes from "./LandingSection.module.css";
const LandingSection = () => {
  return (
    <section id="LandingSection">
      <div
        className={
          classes.sectionHeader +
          " d-flex justify-content-center align-items-center"
        }
      >
        <div className={classes.overlay}></div>
        <div className="text-center" style={{ zIndex: "2" }}>
          <h1 className="display-3">
            <strong>HI, I'M RABEEA</strong>
          </h1>
          <p>WRITER | CREATOR | MANAGER</p>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
