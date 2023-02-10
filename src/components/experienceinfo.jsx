import { Input } from "./global/Input";
import { Textarea } from "./global/textarea";

export const ExperienceInfo = ({ experience, index, handleChange }) => {
  const handleFieldChange = (e) => {
    handleChange(index, e);
  };
  return (
    <section style={{ "margin-top": "60px" }}>
      <Input
        label={"თანამდებობა"}
        placeholder="დეველოპერი, დიზანერი, ა.შ."
        description={"მინიმუმ 2 სიმბოლო"}
        type="text"
        name="position"
        value={experience["text"]}
        onChange={handleFieldChange}
      />
      <Input
        label={"დამსაქმებელი"}
        placeholder="დამსაქმებელი"
        description={"მინიმუმ 2 სიმბოლო"}
        type="text"
        name="employer"
        onChange={handleFieldChange}
      />
      <div className="startEndDates">
        <Input
          name="startDate"
          label={"დაწყების რიცხვი"}
          type="date"
          onChange={handleFieldChange}
        />
        <Input
          name="endDate"
          label={"დამთავრების რიცხვი"}
          type="date"
          onChange={handleFieldChange}
        />
      </div>
      <Textarea
        onChange={handleFieldChange}
        title="აღწერა"
        placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
        name="experienceDescription"
      />
      <hr className="expHr" />
    </section>
  );
};
