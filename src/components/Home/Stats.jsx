import React from "react";

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats__container">
        <div>
          <h2 className="stats__title">
            <strong>50,000+ users</strong> leverage TUROG solutions.
          </h2>
          <p className="stats__description">
            Looking to build and transform your digital payment platform? Reach
            out to TUROG.
          </p>
        </div>
        <div>
          <a href="/contactus" className="stats__cta">
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stats;
