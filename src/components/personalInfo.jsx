import { Input } from "./global/Input";
import { useRef } from "react";
import { Textarea } from "./global/textarea";

export const PersonalInfo = ({ tab, onPersonalInfoChange, formValues }) => {
  const uploadRef = useRef();

  const handleUploadClick = () => {
    uploadRef.current.click();
  };
  return (
    <section style={{ display: tab === 1 ? "block" : "none" }}>
      <div className="parent">
        <Input
          label={"სახელი"}
          placeholder="გიორგი"
          description={"მინიმუმ 2 ასო, ქართული ასოები"}
          type="text"
          name="username"
          onChange={onPersonalInfoChange}
          value={formValues["username"]}
        />
        <Input
          label={"გვარი"}
          placeholder="გიორგაძე"
          description={"მინიმუმ 2 ასო, ქართული ასოები"}
          type="text"
          name="lastname"
          onChange={onPersonalInfoChange}
          value={formValues["lastname"]}
        />
      </div>
      <div className="upload">
        <label>პირადი ფოტოს ატვირთვა</label>
        <input
          ref={uploadRef}
          id="imgUpload"
          type="file"
          accept="image/*"
          hidden
        />
        <button onClick={handleUploadClick} className="uploadBtn" type="button">
          ატვირთვა
        </button>
      </div>
      <Textarea
        title="ჩემ შესახებ (არასავალდებულო)"
        placeholder="ზოგადი ინფო შენ შესახებ"
        rows="1"
        name="aboutMeDescription"
        onChange={onPersonalInfoChange}
        value={formValues["aboutMeDescription"]}
      />
      <Input
        label={"ელ.პოსტა"}
        placeholder="giorgigiorgadze93@redberry.ge"
        description={"უნდა მთავრდებოდეს @redberry.ge-თი"}
        type="text"
        name="email"
        onChange={onPersonalInfoChange}
        value={formValues["email"]}
      />
      <Input
        label={"მობილურის ნომერი"}
        placeholder="+995 551 42 23 22"
        description={"უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს"}
        type="text"
        name="phone"
        onChange={onPersonalInfoChange}
        value={formValues["phone"]}
      />
    </section>
  );
};
