import React from "react";
import boost from "../images/boost-desktop.svg";
import styled from "styled-components";

function Boost() {
  return (
    <BoostPart
      style={{
        backgroundImage: `url(${boost})`,

        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Heading>Boost your links today</Heading>
      <Button>get started</Button>
    </BoostPart>
  );
}

const BoostPart = styled.div`
  height: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #3b3054;
  margin-top: -60px;
`;
const Heading = styled.h2`
  color: #fff;
  text-align: center;
`;
const Button = styled.button`
  margin-top: 25px;
  height: 50px;
  background-color: #2acfcf;
  border-radius: 120px;
  outline: none;
  color: white;
  transition: all 0.3s ease-in-out;
  margin-top: 30px;
  width: 180px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  text-transform: capitalize;
`;
export default Boost;
