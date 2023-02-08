import styled from "styled-components";

export const InfoDetails = ({ title, date, text, experience }) => (
  <ExperienceWrapper>
    <h3>{title}</h3>
    <p className="expEducation">{experience}</p>
    <span>{date}</span>
    <p className="descParagraph">{text}</p>
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
  & .expEducation {
    margin-bottom: 5px;
    font-family: HelveticaNeue;
  }
  & span {
    font-family: HelveticaNeue;
    font-size: 14px;
  }
  & .descParagraph {
    margin: 20px 0;
    font-family: HelveticaNeue;
    line-height: 24px;
    text-transform: capitalize;
  }
`;
