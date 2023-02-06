export const Input = ({ label, placeholder, description }) => {
  return (
    <div class="child">
      <label className="bigLabel" htmlFor="">
        {label}
      </label>
      <input type="text" placeholder={placeholder} />
      <span className="bigLabel">{description}</span>
    </div>
  );
};
