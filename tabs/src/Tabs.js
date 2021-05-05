import React from "react";

const Tabs = ({ newdata, setIndex, i }) => {
  return (
    <div className="tabs">
      {newdata.map((item, index) => {
        const { id, company } = item;
        return (
          <button
            key={id}
            onClick={() => setIndex(index)}
            className={index === i ? "tabs-btn active" : "tabs-btn"}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
