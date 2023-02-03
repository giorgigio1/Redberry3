import background from "./images/shutterstock.png";
import logo from "./images/LOGO.png";
import agency from "./images/LOGO2.png";
import "./App.css";

export default function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <figure>
        <img className="mainLogo" src={logo} alt="" />
      </figure>
      <hr />
      <button className="btn">ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</button>
      <img className="agency" src={agency} alt="" />
    </div>
  );
}
