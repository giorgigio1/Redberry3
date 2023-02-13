import styled from "styled-components";

export const InfoDetails = ({ header, date, title, description }) => {
  const isInfoShown =
    title.trim().length > 1 || description || date.trim().length > 3;
  return (
    <ExperienceWrapper>
      {isInfoShown && <h3>{header}</h3>}
      {title.trim().length > 1 && <p className="expEducation">{title}</p>}
      {date.trim().length > 3 && <span>{date}</span>}
      {description && <p className="descParagraph">{description}</p>}
      {isInfoShown && <hr />}
    </ExperienceWrapper>
  );
};

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
