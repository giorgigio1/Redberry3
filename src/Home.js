import background from "./images/shutterstock.png";
import logo from "./images/LOGO.png";
import agency from "./images/LOGO2.png";
import "./styles/App.css";

export default function Home() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <figure>
        <img className="mainLogo" src={logo} alt="" />
      </figure>
      <hr className="homeHr" />
      <button className="btn">ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</button>
      <img className="agency" src={agency} alt="" />
    </div>
  );
}
