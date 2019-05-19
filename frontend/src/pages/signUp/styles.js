import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  min-height: 100%;
  width: 100%;
  /* display: -webkit-flex; */
  display: flex;
  /* -webkit-align-items: center; */
  align-items: center;
  /* -webkit-justify-content: center; */
  justify-content: center;
  /* flex-direction: column; */
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 350px;

  p {
    font-family: Helvetica-Bold;
    font-size: 16px;
    color: #4b4b4b;
    text-align: left;
    margin-bottom: 10px;
    text-align: left;
  }

  input {
    flex: 1;
    margin-bottom: 40px;
    opacity: 0.5;
    font-family: Helvetica;
    font-size: 20px;
    color: #4b4b4b;
    text-align: left;

    padding: 10px;
    background: #ffffff;
    width: 450px;
    border: 1px solid #333;
    border-radius: 6px;
  }

  button {
    height: 48px;
    width: 450px;
    border-radius: 6px;
    background-image: linear-gradient(to left, #20e3e3, #2096e3);
    border: none;

    font-family: Helvetica-Bold;
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    transition: background-image 1s linear;

    &:hover {
      /* background-image: linear-gradient(to right, #20e3e3, #2096e3); */
    }
  }

  a {
    opacity: 0.6;
    font-family: Helvetica-bold;
    font-size: 16px;
    color: #4b4b4b;
    text-align: center;
    text-decoration: none;
    margin-top: 20px;

    &:hover {
      color: #333;
    }
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  font-family: "Kodchasan", sans-serif;
  line-height: 15px;
  color: #4b4b4b;
  margin-bottom: 30px;
`;

export const Error = styled.p`
  color: #ff817e;
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;
