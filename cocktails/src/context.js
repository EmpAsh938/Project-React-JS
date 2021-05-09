import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchRequest = async (input) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${url}${input}`);
      const result = await response.json();
      if (result.drinks) {
        setIsLoading(false);
        setCocktails([...result.drinks]);
      } else {
        setIsLoading(false);
        setCocktails([]);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRequest(input);
  }, [input]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        cocktails,
        input,
        setInput,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
