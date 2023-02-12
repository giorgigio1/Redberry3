import styled from "styled-components";

export const InfoDetails = ({ header, date, title, description }) => (
  <ExperienceWrapper>
    <h3>{header}</h3>
    <p className="expEducation">{title}</p>
    <span>{date}</span>
    <p className="descParagraph">{description}</p>
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
