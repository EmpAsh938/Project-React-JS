import Query from "./Query";
import { data } from "./data";

const Content = () => {
  return (
    <div className="content">
      {data.map((item, index) => {
        return <Query key={index} {...item} />;
      })}
    </div>
  );
};

export default Content;
