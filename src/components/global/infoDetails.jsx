import styled from "styled-components";

export const InfoDetails = ({ title, date, text, experience }) => (
  <ExperienceWrapper>
    <h3>{title}</h3>
    <p className="eduName">{experience}</p>
    <span className="eduDate">{date}</span>
    <p className="eduParagrap">{text}</p>
    <hr />
  </ExperienceWrapper>
);

const ExperienceWrapper = styled.div`
  & h3 {
    margin-bottom: 10px;
    color: #f93b1d;
    font-weight: bolder;
    font-family: mtav;
  }
`;
