import LogoRight from "../../images/LogoRight.png";
import mail from "../../images/mail.png";
import phone from "../../images/phone.png";
import profile from "../../images/profile.png";
import { InfoDetails } from "./infoDetails";

export const UserProfile = ({ es }) => {
  return (
    <div className="right">
      <div className="personalInfoComponent">
        <div className="half">
          <div className="textSide">
            <h2>
              {es.username}
              {es.lastname}
            </h2>
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
      <InfoDetails
        title="გამოცდილება"
        date="2020-09-23 - 2020-09-23"
        text="Experienced Javascript Native Developer with 5 years in the industry.
          proficient withreact. Used problem-solving aptitude to encahge
          application performance by 14%.created data visualisation tools and
          integrated designs."
        experience="React Native Developer, Microsoft"
      />
      <InfoDetails
        title="განათლება"
        date="2020-09-09"
        text="ვსწავლობდი გულმოდგინეთ. მყავდა ფრიადები. რაც შემეძლო — ვქენი.
        კომპიუტერები მიყვარდა. ვიჯექი ჩემთვის, ვაკაკუნებდი ამ კლავიშებზე.
        მეუნებოდნენ — დაჯექი, წაიკითხე რამე, რას აკაკუნებ, დრო მოვა და
        ჩაგიკაკუნებსო. აჰა, მოვიდა დრო და ვერა ვარ დეველოპერი?"
        experience="  წმ. ანდრიას საპატრიარქოს სასწავლებელი, სტუდენტი"
      />
      <figure className="bottomLogoStar">
        <img src={LogoRight} alt="" />
      </figure>
    </div>
  );
};
