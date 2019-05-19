import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    height: 40px;
    width: 350px;
    border-radius: 6px;
    background: #ff817e;
    border: none;

    font-family: Helvetica-Bold;
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    margin-top: 20px;

    &:hover {
      background: #ff5553;
    }
  }
`;

export const Title = styled.p`
  font-size: 25px;
  color: #696969;
  font-family: Helvetica-bold;
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 12px;
  color: #828282;
  font-family: Arial, Helvetica, sans-serif;
`;
