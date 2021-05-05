import Info from "./Info";

const Content = ({ tourData, handleButton }) => {
  return (
    <div className="content">
      {tourData.map((item, index) => {
        return <Info key={index} {...item} handleButton={handleButton} />;
      })}
    </div>
  );
};

export default Content;
