export const Input = ({ label, placeholder, description }) => {
  return (
    <div className="inputDiv">
      <label>{label}</label>
      <input type="text" placeholder={placeholder} />
      <span>{description}</span>
    </div>
  );
};
