import { useContext } from "react";
import { AppContext } from "./context";

const Stock = () => {
  const { loading, photos } = useContext(AppContext);
  return (
    <article className="stock-photos">
      <div className="stock">
        {photos.map((item) => {
          const {
            id,
            alt_description,
            links: { name },
            urls: { regular },
            likes,
            user: {
              profile_image: { medium },
            },
          } = item;
          return (
            <div className="photo" key={id}>
              <img
                className="photo-image"
                src={regular}
                alt={alt_description}
              />
              <div className="photo-details">
                <div className="photo-title">
                  <h3>{alt_description}</h3>
                  <p>{likes} likes</p>
                </div>
                <img src={medium} alt={name} />
              </div>
            </div>
          );
        })}
      </div>

      {loading && (
        <div className="loader">
          <h1>Loading...</h1>
        </div>
      )}
    </article>
  );
};

export default Stock;
