import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function TestimonialSlider() {
  const testimonials = [
    {
      text: "Rabeea's creative writing skills have truly transformed our website's content. Her work is engaging and perfectly tailored for our target audience. We saw a notable increase in our site's traffic after she came on board.",
      author: "Jason Clark, CEO of TechSolutions",
      pic: require("../../../../assets/img/main/testamonials/jason.jpg"),
    },
    {
      text: "Working with Rabeea has been a wonderful experience. Her ability to understand and enhance our content strategy played a significant role in increasing our brand's online visibility. Her work is consistently impressive and deadline-driven.",
      author: "Sara Brown, Marketing Manager at FinEdge",
      pic: require("../../../../assets/img/main/testamonials/sarabrown.jpg"),
    },
    {
      text: "Rabeea's expertise in content creation is phenomenal. She understands our needs and delivers crisp, clear, and engaging content. Her contributions have definitely taken our blog to the next level.",
      author: "Michael Stevens, Editor-in-chief at TravelWorld",
      pic: require("../../../../assets/img/main/testamonials/micheal.jpg"),
    },
    {
      text: "Rabeea's writing style is both compelling and informative. Her content has a unique flair that resonates with our readers. She has a knack for turning complex topics into readable, enjoyable content.",
      author: "Laura Smith, Content Lead at HealthFirst",
      pic: require("../../../../assets/img/main/testamonials/laura.jpeg"),
    },
    {
      text: "Rabeea's content strategy and writing skills have helped us greatly in building our brand presence online. She's a pleasure to work with, always delivering quality work on time.",
      author: "David Anderson, Founder of FoodieBlog",
      pic: require("../../../../assets/img/main/testamonials/david.jpeg"),
    },
  ];

  return (
    <div className="container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className=" text-center p-md-5">
              <div className="p-5" style={{ boxShadow: "0px 0px 15px #ccc" }}>
                <img
                  src={testimonial.pic}
                  alt={testimonial.author}
                  style={{
                    maxWidth: "200px",
                    maxHeight: "200px",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                    marginBottom: "2rem",
                  }}
                />
                <h5 className="">{testimonial.author}</h5>
                <p className="">{testimonial.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
