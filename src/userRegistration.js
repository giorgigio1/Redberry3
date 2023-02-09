import "./styles/personal.css";
import { Header } from "./components/global/header";
import { PersonalInfo } from "./components/personalInfo";
import { UserProfile } from "./components/global/userProfile";
import { ExperienceInfo } from "./components/experienceinfo";
import { useState } from "react";

const title = { 1: "პირადი ინფო", 2: "გამოცდილება" };
const experienceDefaultState = {
  position: "",
  employer: "",
  startDate: new Date(),
  endDate: new Date(),
  experienceDescription: "",
};

const test = [1, 2];

const UserRegistration = () => {
  const [tab, setTab] = useState(1);

  const [registrationForm, setRegistrationForm] = useState({
    personalInfo: {},
    experienceInfo: [experienceDefaultState],
  });
  console.log(registrationForm.experienceInfo);
  const handlePeviousTab = () => {
    setTab((prevousTab) => {
      return prevousTab === 1 ? prevousTab : prevousTab - 1;
    });
  };

  const handlenextTab = () => {
    setTab((prevousTab) => {
      return prevousTab === 3 ? prevousTab : prevousTab + 1;
    });
  };

  const handlePersonalInfosChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name);
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

  const handleAddNewExperience = () => {
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
            <PersonalInfo
              tab={tab}
              onPersonalInfoChange={handlePersonalInfosChange}
              formValues={registrationForm.personalInfo}
            />
            <div className="rame">
              {/* <ExperienceInfo tab={tab} /> */}
              {registrationForm.experienceInfo.map((experience, index) => (
                <ExperienceInfo key={index} tab={tab} experience={experience} />
              ))}
              {tab === 2 && (
                <button
                  type="button"
                  onClick={handleAddNewExperience}
                  className="addMoreExp"
                >
                  მეტი გამოცდილების დამატება
                </button>
              )}
            </div>
          </form>
          <div className="buttonsContainer">
            {tab > 1 && (
              <button onClick={handlePeviousTab} className="prevBtn">
                უკან
              </button>
            )}
            <button onClick={handlenextTab} className="nextBtn">
              შემდეგი
            </button>
          </div>
        </div>
      </div>
      <UserProfile es={registrationForm.personalInfo} />
    </div>
  );
};

export default UserRegistration;
