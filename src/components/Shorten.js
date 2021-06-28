import axios from "axios";
import React, { useState } from "react";
import short from "../images/bg-short.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";

function Shorten() {
  const [input, setInput] = useState("");
  const [final, setFinal] = useState(null);
  const [initial, setInitial] = useState("copy");

  const changeName = () => {
    setInitial("copied");
  };

  async function getShort(e) {
    e.preventDefault();
    const ans = await axios.get(
      `https://api.shrtco.de/v2/shorten?url=${input}`
    );
    setFinal(ans.data.result);
  }
  console.log(final);
  return (
    <Short>
      <Shorter
        style={{
          backgroundImage: `url(${short})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Form onSubmit={getShort}>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="shorten a link here"
            type="text"
          />
          <Submit disabled={!input} type="submit">
            shorten It
          </Submit>
        </Form>
      </Shorter>
      <Result>
        {final && (
          <ResultBlock>
            <Block>
              <Original>{input}</Original>
              <NewLink>{final.full_short_link}</NewLink>
              <CopyToClipboard text={final.full_short_link}>
                <Copied onClick={changeName}>{initial}</Copied>
              </CopyToClipboard>
            </Block>
          </ResultBlock>
        )}
      </Result>
    </Short>
  );
}
const ResultBlock = styled.div``;
const Short = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 180px;

  background-color: #ebebeb;
`;
const Shorter = styled.div`
  flex-direction: column;
  background-color: #3b3054;
  width: 80%;
  flex-direction: column;
  position: relative;
  top: -40px;
  border-radius: 10px;
  border: 1px solid #fff;
  margin: 0 auto;
`;
const Input = styled.input`
  width: 70%;
  border: 2px solid transparent;
  border-radius: 10px;
  height: 50px;
  position: relative;
  font-size: 18px;
  padding-left: 20px;
  transition: all 0.15s ease-in-out;
  outline: none;
  &:focus {
    outline-color: #2acfcf;
    border-color: #2acfcf;
    border-radius: 10px;
    box-shadow: 0px 0px 10px violet;
  }
  &::placeholder {
    color: #999;
    font-size: 18px;
    font-weight: 500;
  }
  @media (max-width: 900px) {
    width: 80%;
  }
`;
const Submit = styled.button`
  width: 120px;
  height: 50px;
  background-color: #2acfcf;
  border-radius: 120px;
  border: 1px solid white;
  color: white;
  transition: all 0.3s ease-in-out;
  border-radius: 10px;
  width: 170px;
  font-weight: 400;
  font-size: 18px;
  margin-left: 10px;
  font-family: "poppins";
  border: 2px solid transparent;
  cursor: pointer;
  @media (max-width: 900px) {
    width: 80%;
    margin-top: 40px;
  }
`;
const Copied = styled.button`
  width: 120px;
  height: 50px;
  background-color: #2acfcf;
  border-radius: 120px;
  border: 1px solid white;
  color: white;
  transition: all 0.3s ease-in-out;
  border-radius: 10px;
  width: 170px;
  font-weight: 400;
  font-size: 18px;
  margin-left: 10px;
  font-family: "poppins";
  border: 2px solid transparent;
  cursor: pointer;
  @media (max-width: 900px) {
    width: 100%;
    margin-top: 40px;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Result = styled.div`
  margin-top: 200px;
  flex-direction: column;

  width: 80%;
  flex-direction: column;
  position: relative;
  top: -40px;
  border-radius: 10px;

  margin: 8px auto;
`;
const Original = styled.p`
  color: #000;

  font-size: 12px;
`;
const Block = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #000 !important;
  margin-top: 10px;
  padding: 25px;
  border-radius: 10px;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;
const NewLink = styled.p`
  color: #333;
  @media (max-width: 900px) {
    margin-top: 35px;
  }
`;
export default Shorten;
