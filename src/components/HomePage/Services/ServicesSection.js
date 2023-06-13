import React, { useEffect } from "react";
import classes from "./Services.module.css";
import { Fade, Slide } from "react-awesome-reveal";
import { useData } from "../../../context/DataProvider";
import { useInView } from "react-intersection-observer";
const ServicesSection = ({ id }) => {
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
    <section id="servicesSection" className="container" ref={ref}>
      <hr />
      <div>
        <h2 className="display-4 text-center">
          <Fade direction="up" triggerOnce>
            <strong>SERVICES</strong>
          </Fade>
        </h2>
        <p className="text-center">
          <small className="text-muted">
            As a seasoned content writer, I, Rabeea Aftab, offer a comprehensive
            suite of writing services. From engaging blog posts and persuasive
            copywriting to detailed technical documentation, I am equipped to
            help your brand shine and connect with your audience. Dive into my
            world of words and let's create magic together!
          </small>
        </p>

        <div className="d-flex align-items-center justify-content-evenly flex-wrap py-md-5">
          <Slide direction="up" cascade triggerOnce>
            <div className="text-center">
              <img
                width="100"
                height="100"
                src="https://img.icons8.com/external-smashingstocks-hand-drawn-black-smashing-stocks/99/external-content-writing-digital-marketing-smashingstocks-hand-drawn-black-smashing-stocks.png"
                alt="external-content-writing-digital-marketing-smashingstocks-hand-drawn-black-smashing-stocks"
                className={"mb-3 " + classes.img}
              />
              <h4 className={""}>Content Writing</h4>
            </div>
            <div className="text-center">
              <img
                width="100"
                height="100"
                src="https://img.icons8.com/ios/100/selfie.png"
                alt="selfie"
                className={"mb-3 " + classes.img}
              />
              <h4 className={""}>Content Creator</h4>
            </div>
            <div className="text-center">
              <img
                width="100"
                height="100"
                src="https://img.icons8.com/glyph-neue/128/admin-settings-female.png"
                alt="admin-settings-female"
                className={"mb-3 " + classes.img}
              />
              <h4 className={""}>Project Manager</h4>
            </div>
          </Slide>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default ServicesSection;
