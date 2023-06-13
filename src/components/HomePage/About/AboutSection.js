import React, { useEffect } from "react";
import classes from "./AboutSection.module.css";
import rabeea from "../../../assets/img/main/rabeea.jpg";
import logo from "../../../assets/img/logo/signature.png";
import { Fade, Slide } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";
import { useData } from "../../../context/DataProvider";
const AboutSection = ({ id }) => {
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
    <section
      ref={ref}
      id="aboutSection"
      className="container mt-md-3 py-md-5 py-2 px-2"
    >
      <div className="text-center">
        <img src={logo} alt="" height={150} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h3>I'm here to tell you story.</h3>
            <p>
              <small className="text-muted">
                I believe in the power of writing.
              </small>
            </p>

            <article className={classes.article}>
              <Fade direction="left" triggerOnce>
                <Slide cascade triggerOnce direction="left">
                  <p>
                    Hi there, my name is Rabeea Aftab, a seasoned content writer
                    with six years of industry experience under my belt. I
                    started my journey into the vast world of content creation
                    with a passion for storytelling and a love for the power of
                    words.
                  </p>
                  <p>
                    From blogs and articles to press releases and social media
                    content, my writing portfolio covers a wide array of niches.
                    My mission has always been to produce engaging, impactful,
                    and high-quality content that resonates with readers and
                    drives the desired outcomes for my clients.
                  </p>
                  <p>
                    Over the years, I've had the privilege to work with a
                    diverse range of clients, from promising startups to
                    established corporations. This broad experience has equipped
                    me with a keen understanding of various audiences and
                    industry-specific nuances. I pride myself on my ability to
                    quickly adapt to new industries and markets, diving deep
                    into new topics to create compelling and informative pieces
                    that capture the unique voice of each brand I work with.
                  </p>
                </Slide>
              </Fade>
            </article>
          </div>
          <div className="col-md-4">
            <div className="text-center mb-2">
              <img
                src={rabeea}
                alt=""
                height={250}
                style={{ borderRadius: "5px" }}
              />
            </div>
            <aside className="text-muted text-center">
              <Fade direction="up" triggerOnce>
                <small className="" style={{ fontStyle: "italic" }}>
                  I am Rabeea, A seasoned content writer weaving compelling
                  stories for six years. Discover her world of impactful
                  narratives and witness ideas coming to life. Follow me on
                  social media:
                </small>
              </Fade>
            </aside>
            <div className="d-flex align-items-center justify-content-center my-2">
              <Fade direction="up" cascade triggerOnce>
                <div className="me-2">
                  <a
                    href="
                  https://www.linkedin.com/in/rabeea-aftab-53880a1b5/"
                  >
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material-outlined/24/linkedin--v1.png"
                      alt="linkedin--v1"
                    />
                  </a>
                </div>
                <div className="me-2">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/instagram--v1.png"
                    alt="linkedin--v1"
                  />
                </div>
                <div>
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/email--v1.png"
                    alt="linkedin--v1"
                  />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
