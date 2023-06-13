import React, { useEffect } from "react";
import TestimonialSlider from "./Components/TestimonialSlider";
import { useData } from "../../../context/DataProvider";
import { useInView } from "react-intersection-observer";

const TestimonialsSection = ({ id }) => {
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
    <section ref={ref} id="testimonialSection" className="container">
      <hr />
      <div className="py-md-4 py-2">
        <h2 className="text-center display-4">
          <strong>TESTIMONIALS</strong>
        </h2>
        <p className="text-center">
          <small className="text-muted">
            The kind words and endorsements from my clients truly reflect the
            passion I put into my work. Their testimonies reaffirm my commitment
            to delivering top-quality content. Every testimonial fuels my drive
            to exceed expectations and continue making a meaningful impact.
          </small>
        </p>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default TestimonialsSection;
