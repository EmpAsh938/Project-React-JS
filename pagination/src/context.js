import { createContext, useState, useEffect } from "react";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [profileUsers, setProfileUsers] = useState();
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRequest = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setUsers([...result]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);
  useEffect(() => {
    const newProfile = users.slice(index * 10, index * 10 + 10);
    setProfileUsers(newProfile);
  }, [users, index]);

  const handleNavButton = (param) => {
    if (param === "prev") {
      setIndex((oldIndex) => {
        if (oldIndex === 0) {
          return 9;
        }
        return oldIndex - 1;
      });
    } else if (param === "next") {
      setIndex((oldIndex) => {
        if (oldIndex === 9) {
          return 0;
        }
        return oldIndex + 1;
      });
    } else {
      setIndex(param - 1);
    }
  };

  return (
    <AppContext.Provider
      value={{
        profileUsers,
        isLoading,
        handleNavButton,
        index,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
