import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Hero = () => {
  const [modal, setModal] = useState(false);
  return (
    <section className="hero">
      <article>
        <button className="show-btn" onClick={() => setModal(true)}>
          Show Modal
        </button>
      </article>
      <article className={modal ? "modal active-modal" : "modal"}>
        <div className="modal-wrapper">
          <button className="close-btn" onClick={() => setModal(false)}>
            <FaTimes />
          </button>
          <h3>Modal Content</h3>
        </div>
      </article>
    </section>
  );
};

export default Hero;
