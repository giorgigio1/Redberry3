import styled from "styled-components";

export const AddButton = ({ name }) => (
  <styledButton
    type="button"
    // onClick={handleAddNewExperience}
    className="addMoreExp"
  >
    {name}
  </styledButton>
);

const styledButton = styled.button`
  padding: 10px 10px;
  background-color: #62a1eb;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;
