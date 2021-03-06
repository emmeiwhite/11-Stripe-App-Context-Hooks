import React from "react";
import phoneImg from "./../../images/phone.svg";
import { useGlobalContext } from "./../../context";

import "./Hero.css";

const Hero = () => {
  const { handleSubmenu } = useGlobalContext();
  return (
    <section
      className="hero"
      onMouseOver={() => {
        handleSubmenu("close", null, null);
      }}
    >
      <div className="hero-center section">
        <article className="hero-info">
          <h1>
            Payments <br />
            infrastructure
            <br /> for the internet
          </h1>
          <p>
            Millions of businesses of all sizes—from startups to large
            enterprises—use Stripe’s software and APIs to accept payments, send
            payouts, and manage their businesses online.
          </p>
          <button className="btn btn-start-now">Start now</button>
        </article>
        <article className="hero-image">
          <img src={phoneImg} className="phone-img" alt="phone images" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
