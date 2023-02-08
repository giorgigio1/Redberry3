import vector from "../../images/Vector.png";
import styled from "styled-components";

export const Header = ({ title, page }) => {
  return (
    <HeaderWrapper>
      <figure className="backLogo">
        <img src={vector} alt="" />
      </figure>
      <div className="headerInfo">
        <h2>{title}</h2>
        <h3>{page}</h3>
      </div>
      <hr className="personalHr" />
    </HeaderWrapper>
  );
};

export const HeaderWrapper = styled.header`
  width: 76%;
  margin: 0 auto;
  margin-top: 50px;
  & .backLogo {
    position: absolute;
    top: 42px;
    left: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: white;
    border-radius: 100%;
  }
  & .headerInfo {
    display: flex;
    justify-content: space-between;
  }
`;
