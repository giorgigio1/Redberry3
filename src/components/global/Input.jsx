import styled from "styled-components";

export const Input = ({ label, placeholder, description }) => {
  return (
    <WrapperDiv>
      <label>{label}</label>
      <input type="text" placeholder={placeholder} />
      <span>{description}</span>
    </WrapperDiv>
  );
};

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 30px;
  & input {
    padding: 10px 10px;
    margin: 5px 0;
    border-radius: 5px;
    border: 1px solid #bcbcbc;
  }
`;
