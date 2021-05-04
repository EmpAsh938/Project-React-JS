import React, { useState, useEffect } from "react";
import Title from "./Title";
import Slide from "./Slide";
import Button from "./Button";
import { data } from "./data";

const Slider = () => {
  const [index, setIndex] = useState(1);
  useEffect(() => {
    let slideInterval = setInterval(() => {
      setIndex((prevIndex) => {
        let index = prevIndex;
        if (index > data.length - 1) {
          index = 0;
        }
        return index + 1;
      });
    }, 3000);
    return () => {
      clearInterval(slideInterval);
    };
  }, [index]);
  const handleClick = (param) => {
    if (param === "next") {
      setIndex((prevIndex) => {
        let index = prevIndex;
        if (index > data.length - 1) {
          index = 0;
        }
        return index + 1;
      });
    } else if (param === "prev") {
      setIndex((prevIndex) => {
        let index = prevIndex;
        if (index === 1) {
          index = data.length + 1;
        }
        return index - 1;
      });
    }
  };
  return (
    <section>
      <Title />
      <Slide data={data} index={index} />
      <Button handleClick={handleClick} />
    </section>
  );
};

export default Slider;
