import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 5rem;
  text-decoration: underline;
  text-align: left;
  margin: 20px;
  font-family: "League Gothic", sans-serif;
  color: ${(props) => props.theme.color};
`;

const MainTitle = () => {
  return <Title>TIENDA CHIC</Title>;
};

export default MainTitle;
