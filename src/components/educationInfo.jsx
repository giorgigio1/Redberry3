import { Input } from "./global/Input";

export const EducationInfo = () => {
  return (
    <>
      <Input
        label={"სასწავლებელი"}
        placeholder="სასწავლებელი"
        description={"მინიმუმ 2 სიმბოლო"}
        type="text"
        name="school"
        //   onChange={onPersonalInfoChange}
        //   value={formValues["username"]}
      />
    </>
  );
};
