import LogoRight from "./images/LogoRight.png";
import "./styles/personal.css";
import { useRef } from "react";
import { Input } from "./comonents/global/Input";
import { Header } from "./comonents/global/header";

export default function Personal() {
  const uploadRef = useRef();

  const handleUploadClick = () => {
    uploadRef.current.click();
  };

  return (
    <div className="main">
      <div className="left">
        {/* <header>
          <figure className="backLogo">
            <img className="pic1" src={ellipse} alt="" />
            <img className="pic2" src={vector} alt="" />
          </figure>
          <div className="headerInfo">
            <h2>პირადი ინფო</h2>
            <h3>1/3</h3>
          </div>
          <hr className="personalHr" />
        </header> */}
        <Header title="პირადი ინფო" page="1/3" />
        <div>
          <form>
            <section>
              <div className="parent">
                <Input
                  label={"სახელი"}
                  placeholder="გიორგი"
                  description={"მინიმუმ 2 ასო, ქართული ასოები"}
                />
                <Input
                  label={"გვარი"}
                  placeholder="გიორგაძე"
                  description={"მინიმუმ 2 ასო, ქართული ასოები"}
                />
              </div>
              <div className="upload">
                <label>პირადი ფოტოს ატვირთვა</label>
                <input
                  ref={uploadRef}
                  id="imgUpload"
                  type="file"
                  accept="image/*"
                  hidden
                />
                <button
                  onClick={handleUploadClick}
                  className="uploadBtn"
                  type="button"
                >
                  ატვირთვა
                </button>
              </div>
              <div className="aboutMe">
                <label>ჩემ შესახებ (არასავალდებულო)</label>
                <input type="text" placeholder="ზოგადი ინფო შენ შესახებ" />
              </div>
              <Input
                label={"ელ.პოსტა"}
                placeholder="giorgigiorgadze93@redberry.ge"
                description={"უნდა მთავრდებოდეს @redberry.ge-თი"}
              />
              <Input
                label={"მობილურის ნომერი"}
                placeholder="+995 551 42 23 22"
                description={
                  "უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს"
                }
              />
              <button className="nextBtn">შემდეგი</button>
              <button className="prevBtn">უკან</button>
            </section>
          </form>
        </div>
      </div>
      <div className="right">
        <figure>
          <img src={LogoRight} alt="" />
        </figure>
      </div>
    </div>
  );
}
