import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
  text-align: center;
  margin-top: 50px;
  max-width: 90%;
  margin-bottom: 20px;
`;

export const Search = styled.input`
  outline: none;
  padding: 10px 100px;
  border-radius: 10px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 50px;
  max-width: 80%;
`;

export const SubTitle = styled.p`
  color: ${(props) => props.theme.fontColor};
  margin-top: 100px;
`;

export const PhotoArea = styled.div`
  margin-bottom: 20px;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;

  @media (max-width: 770px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const PhotoImage = styled.img`
  height: 100%;
  width: 100%;
`;
