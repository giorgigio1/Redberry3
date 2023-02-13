import { DegreesProvider } from "./components/DegreesContext";
import UserRegistration from "./userRegistration";
import Home from "./Home";
import "./styles/App.css";
import "./styles/experience.css";
import "./styles/personal.css";
import { useState } from "react";

export default function App() {
  const [homePage, setHomePage] = useState(true);
  return (
    <DegreesProvider>
      {homePage ? (
        <Home setHomePage={setHomePage} />
      ) : (
        <UserRegistration setHomePage={setHomePage} />
      )}
    </DegreesProvider>
  );
}
