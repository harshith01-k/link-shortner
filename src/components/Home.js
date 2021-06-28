import React from "react";
import home_image from "../images/illus.svg";
import styled from "styled-components";

function Home() {
  return (
    <HomePage>
      <Main>
        <MainTxt>
          More than just <br /> shorter links
        </MainTxt>
        <ParaTxt>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </ParaTxt>
        <Btn>
          <HomeBtn>Get Started</HomeBtn>
        </Btn>
      </Main>
      <Im>
        <Image className="home_post_img" src={home_image} alt="home" />
      </Im>
    </HomePage>
  );
}
const Main = styled.div``;
const Im = styled.div``;

const HomePage = styled.div`
  display: flex;
  margin-top: 100px;
  justify-content: space-evenly;
  margin-left: 40px;
  margin-right: 40px;
  padding: 20px;
  align-items: center;
  max-width: 100%;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    margin: 0;
    padding: 0;
    align-items: center;
  }
`;
const MainTxt = styled.h1`
  font-size: 45px;
  font-family: "poppins";
  @media (max-width: 900px) {
    font-size: 30px;
    text-align: center;
  }
`;
const ParaTxt = styled.p`
  max-width: 60%;
  @media (max-width: 900px) {
    margin: 0 auto;
    max-width: 50%;
    text-align: center;
    padding: 15px 0;
  }
`;
const Image = styled.img`
  width: 650px;
  display: block;
  @media (max-width: 900px) {
    width: 300px;
    margin: 0 auto;
  }
`;
const HomeBtn = styled.button`
  height: 50px;
  background-color: #2acfcf;
  border-radius: 120px;
  border: 1px solid white;
  color: white;
  transition: all 0.3s ease-in-out;
  margin-top: 30px;
  width: 180px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;
const Btn = styled.div`
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Home;
