import { useState } from "react";

const Info = ({ id, image, name, info, price, handleButton }) => {
  const [text, setText] = useState(false);

  return (
    <div className="content-container" key={id}>
      <img src={image} alt={name} />
      <div className="content-text">
        <h3 className="name">{name}</h3>
        <h3 className="price">${price}</h3>
      </div>
      <div className="info-text">
        <p>
          {text ? info.substring() : info.substring(0, info.length / 3)}
          <span onClick={() => setText(!text)}>
            {text ? " Hide Content" : " Read More..."}
          </span>
        </p>
      </div>
      <button className="btn" onClick={() => handleButton(id)}>
        Not Intersested
      </button>
    </div>
  );
};

export default Info;
