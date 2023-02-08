import { Input } from "./global/Input";
import { Textarea } from "./global/textarea";

export const ExperienceInfo = () => {
  return (
    <section>
      <Input
        label={"თანამდებობა"}
        placeholder="დეველოპერი, დიზანერი, ა.შ."
        description={"მინიმუმ 2 სიმბოლო"}
        type="text"
      />
      <Input
        label={"დამსაქმებელი"}
        placeholder="დამსაქმებელი"
        description={"მინიმუმ 2 სიმბოლო"}
        type="text"
      />
      <div className="startEndDates">
        <Input label={"დაწყების რიცხვი"} type="date" />
        <Input label={"დამთავრების რიცხვი"} type="date" />
      </div>
      <Textarea
        title="აღწერა"
        placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
      />
      <hr className="expHr" />
      <button className="addMoreExp">მეტი გამოცდილების დამატება</button>
      <div className="buttons">
        <button className="nextBtn">შემდეგი</button>
        <button className="prevBtn">უკან</button>
      </div>
    </section>
  );
};
