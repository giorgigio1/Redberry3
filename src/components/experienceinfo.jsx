import { Input } from "./global/Input";
import { Textarea } from "./global/textarea";

export const ExperienceInfo = ({ experience, index, handleChange }) => {
  const handleFieldChange = (e) => {
    handleChange(index, e);
  };

  return (
    <section>
      <Input
        label={"თანამდებობა"}
        placeholder="დეველოპერი, დიზანერი, ა.შ."
        description={"მინიმუმ 2 სიმბოლო"}
        type="text"
        name="position"
        value={experience.position}
        onChange={handleFieldChange}
      />
      <Input
        label={"დამსაქმებელი"}
        placeholder="დამსაქმებელი"
        description={"მინიმუმ 2 სიმბოლო"}
        type="text"
        name="employer"
        onChange={handleFieldChange}
        value={experience.employer}
      />
      <div className="startEndDates">
        <Input
          name="start_date"
          label={"დაწყების რიცხვი"}
          type="date"
          onChange={handleFieldChange}
          value={experience.start_date}
        />
        <Input
          name="due_date"
          label={"დამთავრების რიცხვი"}
          type="date"
          onChange={handleFieldChange}
          value={experience.due_date}
        />
      </div>
      <Textarea
        onChange={handleFieldChange}
        title="აღწერა"
        rows="2"
        placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
        name="description"
        value={experience.description}
      />
      <hr className="expHr" />
    </section>
  );
};
