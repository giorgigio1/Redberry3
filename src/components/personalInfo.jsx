import { Input } from "./global/Input";
import { useRef } from "react";
import { Textarea } from "./global/textarea";

export const PersonalInfo = ({
  onPersonalInfoChange,
  formValues,
  onImageUpload,
}) => {
  const uploadRef = useRef();

  const handleUploadClick = () => {
    uploadRef.current.click();
  };

  return (
    <section>
      <div className="parent">
        <Input
          label={"სახელი"}
          placeholder="გიორგი"
          description={"მინიმუმ 2 ასო, ქართული ასოები"}
          type="text"
          name="name"
          onChange={onPersonalInfoChange}
          value={formValues.name}
        />
        <Input
          label={"გვარი"}
          placeholder="გიორგაძე"
          description={"მინიმუმ 2 ასო, ქართული ასოები"}
          type="text"
          name="surname"
          onChange={onPersonalInfoChange}
          value={formValues.surname}
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
          name="picture"
          onChange={onImageUpload}
        />
        <button onClick={handleUploadClick} className="uploadBtn" type="button">
          ატვირთვა
        </button>
      </div>
      <Textarea
        title="ჩემ შესახებ (არასავალდებულო)"
        placeholder="ზოგადი ინფო შენ შესახებ"
        rows="1"
        name="about_me"
        onChange={onPersonalInfoChange}
        value={formValues.about_me}
      />
      <Input
        label={"ელ.პოსტა"}
        placeholder="giorgigiorgadze93@redberry.ge"
        description={"უნდა მთავრდებოდეს @redberry.ge-თი"}
        type="text"
        name="email"
        onChange={onPersonalInfoChange}
        value={formValues.email}
      />
      <Input
        label={"მობილურის ნომერი"}
        placeholder="+995 551 42 23 22"
        description={"უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს"}
        type="text"
        name="phone_number"
        onChange={onPersonalInfoChange}
        value={formValues.phone_number}
      />
    </section>
  );
};
