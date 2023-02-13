import "./styles/personal.css";
import closeModalX from "./images/Vectorx.png";
import { Header } from "./components/global/header";
import { PersonalInfo } from "./components/personalInfo";
import { UserProfile } from "./components/global/userProfile";
import { ExperienceInfo } from "./components/experienceinfo";
import { useState } from "react";
import { convertBase64 } from "./lib/helpers";
import { EducationInfo } from "./components/educationInfo";
import { useDegrees } from "./components/DegreesContext";
import vector from "./images/Vector.png";

const title = { 1: "პირადი ინფო", 2: "გამოცდილება", 3: "განათლება" };
const experienceDefaultState = {
  position: "",
  employer: "",
  start_date: "",
  due_date: "",
  description: "",
};
const educationDefaultState = {
  institute: "",
  degree_id: null,
  due_date: "",
  description: "",
};

const PersonalInfoTab = ({ values, onChange }) => {
  const handleImageUpload = async (event) => {
    const bs64 = await convertBase64(event.target.files[0]);
    onChange({ image: bs64, imageFile: event.target.files[0] });
  };

  const handlePersonalInfoChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    onChange({ [name]: value });
  };

  return (
    <PersonalInfo
      onPersonalInfoChange={handlePersonalInfoChange}
      formValues={values}
      onImageUpload={handleImageUpload}
    />
  );
};

const ExperiencesTab = ({ experiences, onChange, onAdd }) => {
  const handleExperienceChange = (index, event) => {
    const name = event.target.name;
    const value = event.target.value;

    let tmp = [...experiences];
    tmp[index] = { ...tmp[index], [name]: value };

    onChange(index, { [name]: value });
  };

  return (
    <>
      {experiences.map((experience, index) => (
        <ExperienceInfo
          key={index}
          index={index}
          handleChange={handleExperienceChange}
          experience={experience}
        />
      ))}
      <button type="button" onClick={onAdd} className="addMoreExp">
        მეტი გამოცდილების დამატება
      </button>
    </>
  );
};

const EducationsTab = ({ educations, onChange, onAdd }) => {
  const handleEducationChange = (index, event) => {
    const name = event.target.name;
    const value = event.target.value;

    let tmp = [...educations];
    tmp[index] = { ...tmp[index], [name]: value };

    onChange(index, { [name]: value });
  };

  return (
    <>
      {educations.map((education, index) => (
        <EducationInfo
          key={index}
          index={index}
          handleChange={handleEducationChange}
          education={education}
        />
      ))}
      <button type="button" onClick={onAdd} className="addMoreExp">
        მეტი სასწავლებლის დამატება
      </button>
    </>
  );
};

const Tabs = ({ tab, state, setState }) => {
  switch (tab) {
    case 1: {
      return (
        <PersonalInfoTab
          values={state}
          onChange={(slice) => {
            setState((prevState) => ({
              ...prevState,
              ...slice,
            }));
          }}
        />
      );
    }
    case 2: {
      return (
        <ExperiencesTab
          experiences={state.experiences}
          onChange={(index, slice) => {
            let tmp = [...state.experiences];
            tmp[index] = { ...tmp[index], ...slice };

            setState((prevState) => ({
              ...prevState,
              experiences: tmp,
            }));
          }}
          onAdd={() => {
            setState((prevState) => ({
              ...prevState,
              experiences: [...prevState.experiences, experienceDefaultState],
            }));
          }}
        />
      );
    }
    case 3: {
      return (
        <EducationsTab
          educations={state.educations}
          onChange={(index, slice) => {
            let tmp = [...state.educations];
            tmp[index] = { ...tmp[index], ...slice };

            setState((prevData) => ({
              ...prevData,
              educations: tmp,
            }));
          }}
          onAdd={() => {
            setState((previousForm) => ({
              ...previousForm,
              educations: [...previousForm.educations, educationDefaultState],
            }));
          }}
        />
      );
    }
    default: {
      return null;
    }
  }
};

const UserRegistration = ({ setHomePage }) => {
  const [tab, setTab] = useState(1);

  const [registrationForm, setRegistrationForm] = useState({
    name: "",
    surname: "",
    image: null,
    email: "",
    phone_number: "",
    about_me: "",
    experiences: [experienceDefaultState],
    educations: [educationDefaultState],
  });

  const degrees = useDegrees();

  const handlePeviousTab = () => {
    setTab((prevTab) => prevTab - 1);
  };
  const [error, setError] = useState("");
  const validatePersonalInfo = () => {
    if (!registrationForm.name.length) {
      setError("Name is required");
      return false;
    }
    if (!registrationForm.surname.length) {
      setError("surname is required");
      return false;
    }
    return true;
  };
  const validateExperiences = () => {
    let isValid = true;
    registrationForm.experiences.forEach((el) => {
      if (!isValid) return false;
      if (el.position.length < 1) {
        setError("Position is required");
        isValid = false;
      }
    });
    return isValid;
  };
  const validateEducation = () => {};
  const handleNextTab = () => {
    let isValid = false;
    if (tab === 1) {
      isValid = validatePersonalInfo();
    } else if (tab === 2) {
      isValid = validateExperiences();
    } else if (tab === 3) {
      isValid = validateEducation();
      return handleSubmit();
    }
    if (isValid) {
      return setTab((prevTab) => prevTab + 1);
    }
  };

  const [responseData, setResponseData] = useState(null);

  const handleSubmit = () => {
    const {
      name,
      surname,
      imageFile,
      email,
      phone_number,
      about_me,
      experiences,
      educations,
    } = registrationForm;

    const formData = new FormData();

    formData.append("name", name);
    formData.append("surname", surname);
    formData.append("email", email);
    formData.append("phone_number", phone_number);
    formData.append("image", imageFile);
    formData.append("about_me", about_me);
    experiences.forEach((experience, index) => {
      for (const [key, value] of Object.entries(experiences[index])) {
        formData.append(`experiences[${index}][${key}]`, value);
      }
    });
    educations.forEach((education, index) => {
      for (const [key, value] of Object.entries(educations[index])) {
        formData.append(`educations[${index}][${key}]`, value);
      }
    });

    fetch("https://resume.redberryinternship.ge/api/cvs", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.errors != null) {
          const errorsKeys = Object.keys(data.errors);
          console.log(errorsKeys);
          errorsKeys.forEach((key) => {
            const erroredInput = document.querySelector(`[name='${key}']`);
            console.log(erroredInput)
          });
          return;
        }

        setResponseData({
          ...data,
          image: "https://resume.redberryinternship.ge" + data.image,
        });
      });
  };

  const handleBack = () => {
    setResponseData(null);
    setHomePage(true);
  };

  const [modal, setModal] = useState(true);

  if (responseData != null) {
    return (
      <div className="resumeContainer">
        <figure onClick={handleBack} className="backLogo resumeBackLogo">
          <img src={vector} alt="" />
        </figure>
        <UserProfile resumePage={true} {...responseData} />
        {modal ? (
          <div className="popUp slide">
            <p>რეზიუმე წარმატებით გაიგზავნა 🎉</p>
            <figure
              onClick={() => {
                setModal(false);
              }}
            >
              <img src={closeModalX} alt="" />
            </figure>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="main">
      <div className="left">
        <Header
          setHomePage={setHomePage}
          title={title[tab]}
          page={`${tab}/3`}
        />
        <div className="mainWrapper">
          <form>
            {error && <p className="error">{error}</p>}
            <Tabs
              tab={tab}
              state={registrationForm}
              setState={(data) => {
                setRegistrationForm(data); //aq rame veli tu sheicvala erorsac asuptaveb ro arwerros sul
                setError("");
              }}
            />
          </form>
          <div className="buttonsContainer">
            {tab > 1 && (
              <button
                onClick={handlePeviousTab}
                className="prevBtn"
                disabled={tab === 1}
              >
                უკან
              </button>
            )}
            <button onClick={handleNextTab} className="nextBtn">
              {tab === 3 ? "დასრულება" : "შემდეგი"}
            </button>
          </div>
        </div>
      </div>
      <UserProfile
        {...registrationForm}
        educations={registrationForm.educations.map((education) => {
          const degree = degrees.find(
            (degree) => degree.id === parseInt(education.degree_id, 10)
          );

          return {
            ...education,
            degree: degree != null ? degree.title : "",
          };
        })}
      />
    </div>
  );
};

export default UserRegistration;
