import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
//Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
//icons
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const slides = [
  {
    id: 1,
    title: "Focusing on Innovation, Expertise and Partnership ",
    desc: "Innovation is our compass. With a deep understanding of the digital landscape, TUROG Technologies is your trusted partner in transformation. We collaborate closely with businesses to develop tailored strategies that deliver measurable results.",
    buttonText: "Contact Us",
    images: ["/hero/coding.jpg", "/hero/server-room.jpg", "/hero/teamwork.jpg"],
  },
  {
    id: 2,
    title: "Emphasizing Growth and Transformation",
    desc: "Navigating the digital frontier, TUROG Technologies empowers businesses to thrive in the modern age. We design comprehensive strategies that drive growth, enhance efficiency, and unlock new opportunities.",
    buttonText: "Contact us",
    images: [
      "/hero/woman-laptop.jpg", // Top Left (Large)
      "/hero/meeting.jpg", // Bottom Left
      "/hero/finance.jpg", // Right (Tall)
    ],
  },
];

const Hero = () => {
  return (
    <section className="hero">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        fadeEffect={{ crossFade: true }}
        navigation={{
          nextEl: ".hero__nav--next",
          prevEl: ".hero__nav--prev",
        }}
        effect={"fade"} // Smooth fade transition
        speed={800}
        autoplay={{ delay: 10000 }}
        loop={true}
        className="hero__swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="hero__slide">
            <div className="container hero__grid">
              {/* Left Side: Text Content */}
              <div className="hero__content">
                <h1>{slide.title}</h1>
                <p>{slide.desc}</p>
                <button className="btn">{slide.buttonText}</button>
              </div>

              {/* Right Side: Image Collage */}
              <div className="hero__visuals">
                <div className="hero__collage">
                  <div className="img-box img-1">
                    <img src={slide.images[0]} alt="" />
                  </div>
                  <div className="img-box img-2">
                    <img src={slide.images[1]} alt="" />
                  </div>
                  <div className="img-box img-3">
                    <img src={slide.images[2]} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        <button className="hero__nav hero__nav--prev">
          <IoChevronBack />
        </button>
        <button className="hero__nav hero__nav--next">
          <IoChevronForward />
        </button>
      </Swiper>
    </section>
  );
};

export default Hero;
