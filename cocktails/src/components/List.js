import { useContext } from "react";
import { AppContext } from "../context";
import { Link } from "react-router-dom";

const List = () => {
  const { isLoading, cocktails } = useContext(AppContext);
  if (isLoading) {
    return (
      <div className="loader">
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <section className="cocktails-wrapper">
      <h2 className="cocktails-title">Cocktails</h2>
      <article className="cocktails-container">
        {cocktails.length < 1 ? (
          <div className="cocktails-error">
            <p>No items matched query</p>
          </div>
        ) : (
          cocktails.map((item) => {
            const {
              idDrink,
              strDrink,
              strCategory,
              strAlcoholic,
              strGlass,
              strDrinkThumb,
            } = item;
            return (
              <div className="cocktails" key={idDrink}>
                <img src={strDrinkThumb} alt={strDrink} />
                <div className="cocktails-info">
                  <h3>{strDrink}</h3>
                  <p>{strCategory}</p>
                  <Link to={`/cocktail/${idDrink}`} className="btn">
                    Details
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </article>
    </section>
  );
};

export default List;
