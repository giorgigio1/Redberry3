import vector from "../../images/Vector.png";
import ellipse from "../../images/Ellipse.png";

export const Header = ({ title, page }) => {
  return (
    <header>
      <figure className="backLogo">
        <img className="pic1" src={ellipse} alt="" />
        <img className="pic2" src={vector} alt="" />
      </figure>
      <div className="headerInfo">
        <h2>{title}</h2>
        <h3>{page}</h3>
      </div>
      <hr className="personalHr" />
    </header>
  );
};
