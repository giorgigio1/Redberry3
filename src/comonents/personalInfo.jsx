import { Input } from "./global/Input";
import { useRef } from "react";

export const PersonalInfo = () => {
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
        />
        <Input
          label={"გვარი"}
          placeholder="გიორგაძე"
          description={"მინიმუმ 2 ასო, ქართული ასოები"}
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
      <div className="aboutMe">
        <label>ჩემ შესახებ (არასავალდებულო)</label>
        <input type="textarea" placeholder="ზოგადი ინფო შენ შესახებ" />
      </div>
      <Input
        label={"ელ.პოსტა"}
        placeholder="giorgigiorgadze93@redberry.ge"
        description={"უნდა მთავრდებოდეს @redberry.ge-თი"}
      />
      <Input
        label={"მობილურის ნომერი"}
        placeholder="+995 551 42 23 22"
        description={"უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს"}
      />
      <button className="nextBtn">შემდეგი</button>
      <button className="prevBtn">უკან</button>
    </section>
  );
};
