import { createGlobalStyle } from "styled-components";

interface Props {
  theme: {
    body: string
  }
}

export const GlobalStyle = createGlobalStyle<Props>`
  body {
    background-color: ${(props) => props.theme.body};
    transition: all ease 0.4s;
  }
`;
