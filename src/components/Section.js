import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  backgroundImgDesktop,
  backgroundImgMobile,
  description,
  leftBtnText,
  rightBtnText,
  comment,
  downArrow,
}) {
  return (
    <Wrap bgdImage={backgroundImgDesktop} bgmImage={backgroundImgMobile}>
      <ItemText>
        <Fade bottom>
          <h1>{title}</h1>
        </Fade>
        <Fade delay="1000">{description && <p>{description}</p>}</Fade>
      </ItemText>
      <Footer>
        <Fade top delay={500}>
          <Buttongroup>
            <LeftButton>{leftBtnText}</LeftButton>

            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </Buttongroup>
        </Fade>
        <Fade top delay={1500}>
          {comment && <p>{comment}</p>}
        </Fade>
        <Fade top delay={1500}>
          {downArrow && <DownArrow src="./ressources/down-arrow.svg" />}
        </Fade>
      </Footer>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.section`
  height: 100vh;
  width: 100vw;
  background-image: ${(props) => `url(${props.bgdImage})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 736px) {
    background-image: ${(props) => `url(${props.bgmImage})`};
  }
`;

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content center;
  align-items:center;
  margin-top: 15vh;
  h1 {
    min-width: 30vw;
    margin: 0 10vw;
    text-align: center;
    color: #393c41;
    font-size: 2.5rem;
  }
  p {
    text-align: center;
    margin-top: 10px;
    font-family: "GothamLight", sans-serif;
    color: #393c41;
    font-size: 0.9rem;
    text-decoration: none;
    border-bottom: 1px solid #393c41;
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out;
    &:hover {
      box-shadow: 0 1px black;
    }
  }
`;

const Buttongroup = styled.div`
  display: flex;
  flex:direction:row;
  justify-content: center;
  width: 100vw;
  flex-wrap: wrap;
  height: auto;
  margin-bottom: 30px;
  @media (max-width: 736px) {
      height: 6rem;
    flex-direction:column;
  }
`;

const LeftButton = styled.button`
  border: none;
  border-radius: 50px;
  height: 2.5rem;
  font-family: "gothamMed", sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  cursor: pointer;
  background-color: #171a20cc;
  color: white;
  padding: 5px 40px;
  margin: 0 8px;
  @media (max-width: 736px) {
    max-height: 2.5rem;
    margin-bottom: 10px;
    flex: 1;
  }
`;

const RightButton = styled(LeftButton)`
  color: black;
  background-color: #ffffffa6;
  font-family: "gothamLight", sans-serif;
  @media (max-width: 736px) {
    margin-bottom: 0;
  }
`;

const DownArrow = styled.img`
  width: 35px;
  height: 25px;
  margin-top: 25px;
  animation: bounce 2s infinite;
`;

const Footer = styled.div`
  margin-bottom: 30px;
  p {
    font-family: "gothamLight", sansn-serif;
    text-decoration: underline;
    color: #393c41;
    font-size: 1rem;
    cursor: pointer;
  }
`;
