import React from "react";

const Content = ({ newdata }) => {
  const { title, company, dates, duties } = newdata;
  return (
    <div className="content">
      <h3 className="title">{title}</h3>
      <h4 className="company">{company}</h4>
      <p className="dates">{dates}</p>
      {duties.map((item) => {
        return <div className="duties">{item}</div>;
      })}
      <button className="dummy-btn">More Info</button>
    </div>
  );
};

export default Content;
