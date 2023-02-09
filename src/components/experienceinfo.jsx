import { Input } from "./global/Input";
import { Textarea } from "./global/textarea";



export const ExperienceInfo = ({ tab }) => {
  return (
    <section style={{ display: tab === 2 ? "block" : "none" }}>
      <Input
        label={"თანამდებობა"}
        placeholder="დეველოპერი, დიზანერი, ა.შ."
        description={"მინიმუმ 2 სიმბოლო"}
        type="text"
        name="position"
      />
      <Input
        label={"დამსაქმებელი"}
        placeholder="დამსაქმებელი"
        description={"მინიმუმ 2 სიმბოლო"}
        type="text"
        name="employer"
      />
      <div className="startEndDates">
        <Input name="startDate" label={"დაწყების რიცხვი"} type="date" />
        <Input name="endDate" label={"დამთავრების რიცხვი"} type="date" />
      </div>
      <Textarea
        title="აღწერა"
        placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
        name="experienceDescription"
      />
      <hr className="expHr" />
    </section>
  );
};
