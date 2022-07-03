import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  bg: "hsl(0, 5%, 83%)",
  color: "hsl(210, 11%, 15%)",
  colorHover: "hsl(0, 0%, 0%)",
  footerLinkColorHoverBg: "hsl(205deg 13% 76%)"
};

export const darkTheme = {
  bg: "hsl(210, 11%, 15%)",
  color: "hsl(210, 22%, 87%)",
  colorHover: "hsl(0, 0%, 100%)",
  footerLinkColorHoverBg: "hsl(210deg 10% 15%)"
};

export const GlobalStyles = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    transition: all .2s ease-in-out;
    color: ${(props) => props.theme.color};
    background: ${(props) => props.theme.bg};
  }
`;
