import React, { useEffect } from "react";
import classes from "./LandingSection.module.css";
import { Fade } from "react-awesome-reveal";
import { useData } from "../../../context/DataProvider";
import { useInView } from "react-intersection-observer";
const LandingSection = ({ id }) => {
  const { setCurrent } = useData();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setCurrent(id);
    }
  }, [inView]);

  return (
    <section id="landingSection" ref={ref}>
      <div
        className={
          classes.sectionHeader +
          " d-flex justify-content-center align-items-center"
        }
      >
        <div className={classes.overlay}></div>
        <Fade direction="up" triggerOnce>
          <div className="text-center" style={{ zIndex: "2" }}>
            <h1 className="display-3">
              <strong>HI, I'M RABEEA</strong>
            </h1>
            <p>WRITER | CREATOR | MANAGER</p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default LandingSection;
