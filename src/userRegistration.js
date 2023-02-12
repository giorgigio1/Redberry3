import "./styles/personal.css";
import { Header } from "./components/global/header";
import { PersonalInfo } from "./components/personalInfo";
import { UserProfile } from "./components/global/userProfile";
import { ExperienceInfo } from "./components/experienceinfo";
import { useState, Fragment } from "react";
import { convertBase64, getStringedDate } from "./lib/helpers";
import { EducationInfo } from "./components/educationInfo";
import { useDegrees } from "./components/DegreesContext";

const title = { 1: "პირადი ინფო", 2: "გამოცდილება", 3: "განათლება" };
const experienceDefaultState = {
  position: "",
  employer: "",
  start_date: getStringedDate(new Date(), new Date()),
  due_date: getStringedDate(new Date(), new Date()),
  description: "",
};
const educationDefaultState = {
  institute: "",
  degree_id: null,
  due_date: getStringedDate(new Date(), new Date()),
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
    <Fragment>
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
    </Fragment>
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
    <Fragment>
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
    </Fragment>
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

const UserRegistration = () => {
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

  const handleNextTab = () => {
    setTab((prevTab) => prevTab + 1);
  };

  // TODO: გაუწერე სტილები და შეცვალე null-ით
  const [responseData, setResponseData] = useState({
    id: 11842,
    name: "აწდაწდ",
    surname: "აწდაწდაწდ",
    email: "rawdawda@redberry.ge",
    phone_number: "+995551422322",
    about_me: "აწდაწდაწ",
    experiences: [
      {
        id: 12392,
        position: "awdawd",
        employer: "awdawd",
        start_date: "1111-11-18",
        due_date: "1111-11-09",
        description: "awdawdawd",
      },
      {
        id: 12393,
        position: "წდაწდ",
        employer: "აწდადწ",
        start_date: "2023-02-09",
        due_date: "2023-02-15",
        description: "აწდაწდაწდ",
      },
    ],
    educations: [
      {
        id: 13017,
        institute: "აწდაწდ",
        degree: "საშუალო სკოლის დიპლომი",
        due_date: "2023-02-16",
        description: "აწდაწდ",
      },
      {
        id: 13018,
        institute: "აწდწად",
        degree: "მაგისტრი",
        due_date: "2023-02-16",
        description: "აწდაწდაწდად",
      },
    ],
    image:
      "https://resume.redberryinternship.ge/storage/images/F2CUQlJfmRtFudYmIbPpQIOzImOerXsOZ6wnjyRK.jpg",
  });

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
          // TODO: აჩვენე ერორის შეტყობინება
          return;
        }

        setResponseData({
          ...data,
          image: "https://resume.redberryinternship.ge" + data.image,
        });
      });
  };

  if (responseData != null) {
    return (
      <div className="main">
        <UserProfile {...responseData} />
      </div>
    );
  }

  return (
    <div className="main">
      <div className="left">
        <Header title={title[tab]} page={`${tab}/3`} />
        <div className="mainWrapper">
          <form>
            <Tabs
              tab={tab}
              state={registrationForm}
              setState={setRegistrationForm}
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
            {tab === 3 ? (
              <button onClick={handleSubmit} className="nextBtn">
                დასრულება
              </button>
            ) : (
              <button onClick={handleNextTab} className="nextBtn">
                შემდეგი
              </button>
            )}
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
