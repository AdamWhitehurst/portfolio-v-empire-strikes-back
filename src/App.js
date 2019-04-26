import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Logo from "./Logo";
import Section from "./Section";
import sections from "./sections_text";

const Container = styled.div`
  height: 100vh;
  background-color: #ededed;
  padding-left: 20vw;
  padding-right: 20vw;
`;

const Main = () => {
  const renderSections = sections =>
    sections.map(section => <Section {...section} />);
  return (
    <Container>
      <Logo />
      <Header />
      {renderSections(sections)}
    </Container>
  );
};

export default Main;
