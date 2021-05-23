import { useState, useEffect, createContext } from "react";

export const AppContext = createContext();
const url = "https://api.unsplash.com/search/photos";

const AppProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const [text, setText] = useState("");

  const fetchRequest = async (pages, query = "nature") => {
    setLoading(false);
    console.log(pages, query);
    try {
      const response = await fetch(
        `${url}?client_id=${process.env.REACT_APP_ACCESS_KEY}&page=${pages}&query=${query}`
      );
      const result = await response.json();
      setPhotos((oldPhotos) => {
        if (text) {
          return [...result.results];
        } else {
          return [...oldPhotos, ...result.results];
        }
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(true);
  };

  useEffect(() => {
    fetchRequest(page);
    if (text) {
      fetchRequest(page, text);
    }
  }, [page, text]);

  useEffect(() => {
    const scrollEvent = window.addEventListener("scroll", () => {
      if (
        loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight
      )
        setPage((oldPage) => {
          return oldPage + 1;
        });
    });
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      setText(input);
      setInput("");
    }
  };

  return (
    <AppContext.Provider
      value={{
        photos,
        loading,
        input,
        setInput,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
