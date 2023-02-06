import vector from "./images/Vector.png";
import LogoRight from "./images/LogoRight.png";
import "./styles/personal.css";
import { useRef } from "react";
import { Input } from "./comonents/global/Input";

export default function Personal() {
  const uploadRef = useRef();

  const handleUploadClick = () => {
    uploadRef.current.click();
  };

  return (
    <div className="main">
      <div className="left">
        <header>
          <figure className="mainLogo">
            <img src={vector} alt="" />
          </figure>
          <h2>პირადი ინფო</h2>
          <p>1/3</p>
        </header>
        <hr className="hr2" />
        <div>
          <form>
            <section>
              <div class="parent">
                <Input
                  label={"სახელი"}
                  description={"მინიმუმ 2 ასო, ქართული ასოები"}
                  placeholder="გიორგი"
                />
                <Input
                  label={"სახელი"}
                  description={"მინიმუმ 2 ასო, ქართული ასოები"}
                  placeholder="გიორგი"
                />
                <div class="child">
                  <label className="bigLabel" htmlFor="">
                    გვარი
                  </label>
                  <input type="text" placeholder="მუმლაძე" />
                  <span>მინიმუმ 2 ასო, ქართული ასოები</span>
                </div>
              </div>
              <div className="upload">
                <label className="bigLabel" htmlFor="">
                  პირადი ფოტოს ატვირთვა
                </label>
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
                  შემდეგი
                </button>
              </div>
              <div class="aboutMe child">
                <label className="bigLabel" htmlFor="">
                  ჩემ შესახებ (არასავალდებულო)
                </label>
                <input type="text" placeholder="ზოგადი ინფო შენ შესახებ" />
              </div>
              <div class="child email">
                <label className="bigLabel" htmlFor="">
                  ელ.ფოსტა
                </label>
                <input type="text" placeholder="anzorr999@redberry.ge" />
                <span>უნდა მთავრდებოდეს @redberry.ge-ით</span>
              </div>
              <div class="child">
                <label className="bigLabel" htmlFor="">
                  მობილურის ნომერი
                </label>
                <input type="text" placeholder="+995 551 12 34 56" />
                <span>
                  უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
                </span>
              </div>
              <button className="nextBtn">ᲨᲔᲛᲓᲔᲒᲘ</button>
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
