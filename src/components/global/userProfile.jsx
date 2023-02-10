import LogoRight from "../../images/LogoRight.png";
import mail from "../../images/mail.png";
import phone from "../../images/phone.png";
import profile from "../../images/profile.png";
import { InfoDetails } from "./infoDetails";

export const UserProfile = ({ personalInfo, experienceInfo }) => {
  console.log("personalinfo", personalInfo);
  return (
    <div className="right">
      <div className="personalInfoComponent">
        <div className="half">
          <div className="textSide">
            <h2>
              {personalInfo.username} {personalInfo.lastname}
            </h2>
            {personalInfo.email && (
              <figure className="mailRight">
                <img src={mail} alt="" />
                <p>{personalInfo.email}</p>
              </figure>
            )}
            {personalInfo.phone && (
              <figure className="phoneRight">
                <img src={phone} alt="" />
                <p>{personalInfo.phone}</p>
              </figure>
            )}

            {personalInfo.aboutMeDescription && <h3>ჩემ შესახებ</h3>}
            <p className="aboutMeText">{personalInfo.aboutMeDescription}</p>
          </div>
          {personalInfo.bs64 && (
            <figure className="pictureSide">
              <img src={personalInfo.bs64} alt="" />
            </figure>
          )}
        </div>
        <hr className="personalHr" />
      </div>
      {experienceInfo.map((info, index) => (
        <InfoDetails
          key={index}
          title="გამოცდილება"
          date={`${info.startDate}  ${info.endDate}`}
          // date="2020-09-23 - 2020-09-23"
          text={info.experienceDescription}
          experience={`${info.position} ${info.employer}`}
        />
      ))}
      <figure className="bottomLogoStar">
        <img src={LogoRight} alt="" />
      </figure>
    </div>
  );
};
