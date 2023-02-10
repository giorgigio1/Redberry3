import "./styles/personal.css";
import { Header } from "./components/global/header";
import { PersonalInfo } from "./components/personalInfo";
import { UserProfile } from "./components/global/userProfile";
import { ExperienceInfo } from "./components/experienceinfo";
import { useState } from "react";
import { convertBase64, getStringedDate } from "./lib/helpers";
import { EducationInfo } from "./components/educationInfo";

const title = { 1: "პირადი ინფო", 2: "გამოცდილება", 3: "განათლება" };
const experienceDefaultState = {
  position: "",
  employer: "",
  startDate: getStringedDate(new Date(), new Date()),
  endDate: getStringedDate(new Date(), new Date()),
  experienceDescription: "",
};

const UserRegistration = () => {
  const [tab, setTab] = useState(1);

  const [registrationForm, setRegistrationForm] = useState({
    personalInfo: {
      username: "",
      lastname: "",
      picture: "",
      email: "",
      phone: "",
      aboutMeDescription: "",
    },
    experienceInfo: [experienceDefaultState],
  });
  console.log("personalInfo", registrationForm.personalInfo);
  console.log("experienceInfo", registrationForm.experienceInfo);
  const handlePeviousTab = () => {
    setTab((prevousTab) => {
      return prevousTab === 1 ? prevousTab : prevousTab - 1;
    });
  };

  const handleImageUpload = async (event) => {
    console.log(event);
    const bs64 = await convertBase64(event.target.files[0]);
    setRegistrationForm((previousForm) => {
      return {
        ...previousForm,
        personalInfo: {
          ...previousForm.personalInfo,
          picture: event.target.files[0],
          bs64,
        },
      };
    });
  };

  const handleNextTab = () => {
    setTab((prevousTab) => {
      return prevousTab === 3 ? prevousTab : prevousTab + 1;
    });
  };

  const handlePersonalInfosChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("სახელი", name);
    console.log("მნიშვნელობა", value);
    setRegistrationForm((previousForm) => {
      return {
        ...previousForm,
        personalInfo: {
          ...previousForm.personalInfo,
          [name]: value,
        },
      };
    });
  };
  const handleExperienceChange = (index, event) => {
    const name = event.target.name;
    const value = event.target.value;

    let tmp = [...registrationForm.experienceInfo];
    tmp[index] = { ...tmp[index], [name]: value };
    console.log("მნიშვნელობა", tmp);
    setRegistrationForm((prevData) => {
      return {
        ...prevData,
        experienceInfo: tmp,
      };
    });
  };

  const handleAddNewExperience = (event) => {
    setRegistrationForm((previousForm) => {
      return {
        ...previousForm,
        experienceInfo: [
          ...previousForm.experienceInfo,
          experienceDefaultState,
        ],
      };
    });
  };

  return (
    <div className="main">
      <div className="left">
        <Header title={title[tab]} page={`${tab}/3`} />
        <div className="mainWrapper">
          <form>
            {tab === 1 ? (
              <PersonalInfo
                tab={tab}
                onPersonalInfoChange={handlePersonalInfosChange}
                formValues={registrationForm.personalInfo}
                onImageUpload={handleImageUpload}
              />
            ) : tab === 2 ? (
              <>
                <div className="rame">
                  {registrationForm.experienceInfo.map((experience, index) => (
                    <ExperienceInfo
                      key={index}
                      index={index}
                      handleChange={handleExperienceChange}
                      experience={experience}
                    />
                  ))}
                  <button
                    type="button"
                    onClick={handleAddNewExperience}
                    className="addMoreExp"
                  >
                    მეტი გამოცდილების დამატება
                  </button>
                </div>
              </>
            ) : tab === 3 ? (
              <EducationInfo />
            ) : null}
          </form>
          <div className="buttonsContainer">
            {tab > 1 && (
              <button onClick={handlePeviousTab} className="prevBtn">
                უკან
              </button>
            )}
            <button onClick={handleNextTab} className="nextBtn">
              შემდეგი
            </button>
          </div>
        </div>
      </div>
      <UserProfile
        personalInfo={registrationForm.personalInfo}
        experienceInfo={registrationForm.experienceInfo}
      />
    </div>
  );
};

export default UserRegistration;
