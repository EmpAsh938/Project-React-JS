import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Cocktail = () => {
  const [cocktails, setCocktails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const fetchRequest = async (param) => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${param}`
      );
      const result = await response.json();
      setIsLoading(false);
      setCocktails(result.drinks[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRequest(id);
  }, [id]);

  if (isLoading) {
    return (
      <div className="loader">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!cocktails) {
    return (
      <div className="cocktails-error">
        <h2>No Cocktails to display</h2>
      </div>
    );
  }
  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
  } = cocktails;
  return (
    <main className="cocktail-wrapper">
      <section className="cocktail-container">
        <article className="cocktail-title">
          <Link to="/" className="btn">
            Back Home
          </Link>
          <h2>{strDrink}</h2>
        </article>
        <article className="cocktail-display">
          <div className="cocktail-image">
            <img src={strDrinkThumb} alt={strDrink} />
          </div>
          <div className="cocktail-info">
            <p>
              <span className="cocktail-info-title">Name :</span>
              {strDrink}
            </p>
            <p>
              <span className="cocktail-info-title">category :</span>
              {strCategory}
            </p>
            <p>
              <span className="cocktail-info-title">info :</span>
              {strAlcoholic}
            </p>
            <p>
              <span className="cocktail-info-title">glass :</span>
              {strGlass}
            </p>
            <p>
              <span className="cocktail-info-title">Instructions :</span>
              {strInstructions}
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Cocktail;
