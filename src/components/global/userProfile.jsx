import LogoRight from "../../images/LogoRight.png";
import mail from "../../images/mail.png";
import phone from "../../images/phone.png";
import { InfoDetails } from "./infoDetails";

export const UserProfile = ({
  id,
  name,
  surname,
  email,
  phone_number,
  about_me,
  experiences,
  educations,
  image,
  resumePage,
}) => {
  return (
    <div className={`right ${resumePage ? "resumePage" : ""} `}>
      <div className="personalInfoComponent">
        <div className="half">
          <div className="textSide">
            <h2>
              {name} {surname}
            </h2>
            {email && (
              <figure className="mailRight">
                <img src={mail} alt="" />
                <p>{email}</p>
              </figure>
            )}
            {phone_number && (
              <figure className="phoneRight">
                <img src={phone} alt="" />
                <p>{phone_number}</p>
              </figure>
            )}

            {about_me && <h3>ჩემ შესახებ</h3>}
            <p className="aboutMeText">{about_me}</p>
          </div>
          {image && (
            <figure className="pictureSide">
              <img src={image} alt="" />
            </figure>
          )}
        </div>
        <hr className="personalHr" />
      </div>
      {experiences.map((experience, index) => (
        <InfoDetails
          key={index}
          header="გამოცდილება"
          title={`${experience.position} ${experience.employer}`}
          description={experience.description}
          date={`${experience.start_date}  ${experience.due_date}`}
          // date="2020-09-23 - 2020-09-23"
        />
      ))}
      {educations.map((education, index) => {
        return (
          <InfoDetails
            key={index}
            header="განათლება"
            title={`${education.institute} ${education.degree}`}
            description={education.description}
            date={`${education.due_date}`}
            // date="2020-09-23 - 2020-09-23"
          />
        );
      })}
      <figure className="bottomLogoStar">
        <img src={LogoRight} alt="" />
      </figure>
    </div>
  );
};
