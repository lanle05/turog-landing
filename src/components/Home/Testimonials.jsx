import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: "/testimonials/gbenga-image.jpg", // Replace with actual image path
      name: "Gbenga Omolokun",
      title: "CEO, Ceviant",
      quoteTitle: "Outstanding Service and Expertise!",
      quote:
        "TUROG Technologies has been instrumental in our digital transformation journey. Their team's expertise in custom software development and ERP implementation has significantly enhanced our operational efficiency. The personalized approach and commitment to understanding our unique needs truly set them apart. Highly recommended!",
    },
    {
      id: 2,
      image: "/testimonials/robert-image.jpg", // Replace with actual image path
      name: "Robert Jakech",
      title: "CTO, Fiter",
      quoteTitle: "Partnering for Success!",
      quote:
        "TUROG Technologies has proven to be a true partner in our success. They supported us with the API Manager implementation and Identity Server Implementation. They actively listen to our concerns, provide valuable insights, and go the extra mile to ensure our complete satisfaction. We highly value their customer-centric approach.!",
    },
    {
      id: 3,
      image: "/testimonials/daniel-image.png", // Replace with actual image path
      name: "Babatunde Daniel",
      title: "CTO, VFD Tech",
      quoteTitle: "A Breath of Fresh Air!",
      quote:
        "TUROG Technologies brought a refreshing level of creativity and innovation to our digital banking projects. They consistently challenged the status quo and presented us with novel approaches . Their ability to think outside the box has resulted in truly unique and impactful solutions that have driven significant competitive advantage.",
    },
    {
      id: 4,
      image: "/testimonials/sola-image.jpg", // Replace with actual image path
      name: "Sola Ajayi",
      title: "Engineering Mgr., Shara",
      quoteTitle: "Exceptional Problem Solvers!",
      quote:
        "TUROG Technologies demonstrated a remarkable ability to delve deep into our business challenges. Their team's analytical skills and innovative thinking supported our core-banking implementation that addressed our most complex issues which has proven invaluable in optimizing our operations and achieving our strategic goals.",
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__heading">Client Reviews</h2>
        <p className="testimonials__subheading">
          Hear directly from our clients about their experiences with our
          services.
        </p>

        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonials__card">
              <div className="testimonials__image-wrapper">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonials__image"
                />
              </div>
              <div className="testimonials__content">
                <h3 className="testimonials__name">{testimonial.name}</h3>
                <p className="testimonials__title">{testimonial.title}</p>
                <h4 className="testimonials__quote-title">
                  "{testimonial.quoteTitle}"
                </h4>
                <p className="testimonials__quote">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
