import LogoRight from "../../images/LogoRight.png";
import mail from "../../images/mail.png";
import phone from "../../images/phone.png";
import profile from "../../images/profile.png";

export const UserProfile = () => {
  return (
    <div className="right">
      <div className="personalInfoComponent">
        <div className="half">
          <div className="textSide">
            <h2>გიორგი გიორგაძე</h2>
            <figure className="mailRight">
              <img src={mail} alt="" />
              <p>giorgigiorgadze93@redberry.ge</p>
            </figure>
            <figure className="phoneRight">
              <img src={phone} alt="" />
              <p>+995 551 42 23 22</p>
            </figure>
            <h3>ჩემ შესახებ</h3>
            <p className="aboutMeText">
              ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ ავდგები
              გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვვაკეთებ
            </p>
          </div>
          <figure className="pictureSide">
            <img src={profile} alt="" />
          </figure>
        </div>
        <hr className="personalHr" />
      </div>

      <figure>
        <img src={LogoRight} alt="" />
      </figure>
    </div>
  );
};
