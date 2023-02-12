import { DegreesProvider } from "./components/DegreesContext";
import UserRegistration from "./userRegistration";
// import Home from "./Home";
import "./styles/App.css";
import "./styles/experience.css";
import "./styles/personal.css";

export default function App() {
  return (
    <DegreesProvider>
      {/* <Home /> */}
      <UserRegistration />
      {/* <Experience /> */}
    </DegreesProvider>
  );
}
