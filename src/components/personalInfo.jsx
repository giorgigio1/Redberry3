import { Input } from "./global/Input";
import { useRef } from "react";
import { Textarea } from "./global/textarea";

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
          type="text"
        />
        <Input
          label={"გვარი"}
          placeholder="გიორგაძე"
          description={"მინიმუმ 2 ასო, ქართული ასოები"}
          type="text"
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
      />
      <Input
        label={"ელ.პოსტა"}
        placeholder="giorgigiorgadze93@redberry.ge"
        description={"უნდა მთავრდებოდეს @redberry.ge-თი"}
        type="text"
      />
      <Input
        label={"მობილურის ნომერი"}
        placeholder="+995 551 42 23 22"
        description={"უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს"}
        type="text"
      />
      <div className="buttons">
        <button className="nextBtn">შემდეგი</button>
        <button className="prevBtn">უკან</button>
      </div>
      {/* <button className="nextBtn">შემდეგი</button>
      <button className="prevBtn">უკან</button> */}
    </section>
  );
};
