import styled from "styled-components";

export const Textarea = ({ title, placeholder, rows }) => (
  <TextareaWrapper>
    <label>{title}</label>
    <textarea placeholder={placeholder} rows={rows}></textarea>
  </TextareaWrapper>
);

const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & textarea {
    padding: 10px 0 70px 10px;
    margin-top: 5px;
    border-radius: 5px;
    border: 1px solid #bcbcbc;
    resize: none;
    overflow: hidden;
  }
`;
