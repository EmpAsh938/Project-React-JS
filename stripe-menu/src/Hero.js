import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <article className="hero-content">
        <h2>Payments infrastructure for the internet</h2>
        <p>
          Millions of companies of all sizes—from startups to Fortune 500s—use
          Stripe’s software and APIs to accept payments, send payouts, and
          manage their businesses online.
        </p>
        <button className="btn">Start Now</button>
      </article>
      <article className="hero-image">
        <img src="./phone.svg" alt="phone" />
      </article>
    </section>
  );
};

export default Hero;
