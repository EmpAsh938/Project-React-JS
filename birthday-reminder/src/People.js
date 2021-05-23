const People = ({ img, name, age }) => {
  return (
    <div className="person">
      <img src={img} alt={name} />
      <div className="info-container">
        <h3>{name}</h3>
        <h3 className="age">{age}</h3>
      </div>
    </div>
  );
};

export default People;
