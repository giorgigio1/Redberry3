import { createContext, useContext, useState, useEffect } from "react";

const DegreesContext = createContext([]);

export const DegreesProvider = ({ children }) => {
  const [degrees, setDegrees] = useState([]);

  useEffect(() => {
    fetch("https://resume.redberryinternship.ge/api/degrees")
      .then((response) => response.json())
      .then((data) => setDegrees(data));
  }, []);

  return (
    <DegreesContext.Provider value={degrees}>
      {children}
    </DegreesContext.Provider>
  );
};

export const useDegrees = () => useContext(DegreesContext);
