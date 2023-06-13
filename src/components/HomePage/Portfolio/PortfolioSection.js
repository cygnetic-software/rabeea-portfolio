import React, { useState } from "react";
import { useData } from "../../../context/DataProvider";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { useEffect } from "react";
import classes from "./PortfolioSection.module.css";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
const Project = ({ pdf, index }) => {
  const cardRef = useRef();

  useEffect(() => {
    console.log(cardRef);
    if (cardRef.current) {
      cardRef.current.addEventListener("mousemove", (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        let xAxis = (rect.width / 2 - (e.clientX - rect.left)) / 10;
        let yAxis = (rect.height / 2 - (e.clientY - rect.top)) / 10;
        cardRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      });

      cardRef.current.addEventListener("mouseenter", (e) => {
        cardRef.current.style.transition = "all 0.1s ease";
      });

      cardRef.current.addEventListener("mouseleave", (e) => {
        cardRef.current.style.transition = "all 0.5s ease";
        cardRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
      });
    }
  }, [cardRef]);

  return (
    <div
      className={"my-2 mx-2 " + classes.card}
      key={index}
      style={{ maxWidth: "400px", width: "100%" }}
      id="my-card"
      ref={cardRef}
    >
      <div className="card">
        <div className="card-header">
          <a href={pdf.pdfURL} target="_blank" rel="noopener noreferrer">
            <img
              src={pdf.thumbnailURL}
              alt=""
              style={{ objectFit: "cover" }}
              width={"100%"}
              height={250}
            />
          </a>
        </div>
        <div className="card-body">
          <h5>{pdf.title}</h5>
        </div>
      </div>
    </div>
  );
};

const PortfolioSection = ({ id }) => {
  const { pdfList, setCurrent } = useData();
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
    <section id="portfolioSection" ref={ref}>
      <div className="container py-md-5 py-2 ">
        <h2 className="display-4 text-center mb-3">
          <strong>PORTFOLIO</strong>
        </h2>
        <p className="text-center">
          <small className="text-muted">
            Explore my portfolio to witness the versatility in my writing. Over
            the years, I, Rabeea Aftab, have catered to diverse industries,
            enriching my repertoire and broadening my perspectives. Each project
            here is a testament to my commitment to quality and creativity.
          </small>
        </p>
        <div className="d-flex justify-content-evenly flex-wrap">
          {pdfList.length === 0 ? (
            <div>No Project Found</div>
          ) : (
            pdfList.map((pdf, index) => (
              <Project key={index} pdf={pdf} index={index} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
