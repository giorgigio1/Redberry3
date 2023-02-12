import { Input } from "./global/Input";
import "../styles/education.css";
import { Textarea } from "./global/textarea";
import { useDegrees } from "./DegreesContext";

export const EducationInfo = ({ education, index, handleChange }) => {
  const handleFieldChange = (e) => {
    handleChange(index, e);
  };

  const degrees = useDegrees();

  return (
    <>
      <div className="educationWrapper">
        <Input
          label={"სასწავლებელი"}
          placeholder="სასწავლებელი"
          description={"მინიმუმ 2 სიმბოლო"}
          type="text"
          name="institute"
          onChange={handleFieldChange}
          value={education.institute}
        />

        <div className="qualityEndDate">
          <div className="selectComp">
            <label>ხარისხი</label>
            <select
              name="degree_id"
              onChange={handleFieldChange}
              value={education.degree_id || "__empty"}
            >
              <option disabled hidden value="__empty" style={{ color: "red" }}>
                აირჩიეთ ხარისხი
              </option>
              {degrees &&
                degrees.length > 0 &&
                degrees.map((e, index) => (
                  <option key={e.id} value={e.id}>
                    {e.title}
                  </option>
                ))}
            </select>
          </div>
          <Input
            name="due_date"
            label={"დამთავრების რიცხვი"}
            type="date"
            onChange={handleFieldChange}
            value={education.due_date}
          />
        </div>
        <Textarea
          onChange={handleFieldChange}
          title="აღწერა"
          rows="4"
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
          name="description"
          value={education.description}
        />
        <hr className="expHr" />
      </div>
    </>
  );
};
