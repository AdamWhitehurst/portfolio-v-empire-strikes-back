import React from "react";
import styled from "styled-components";

import Subsection from "./Subsection";
import TextEntry from "./TextEntry";

const Line = styled.div`
  width: 100%;
  height: 1px;
  padding-top: 1em;
  border-bottom: 1px solid black;
`;

const Container = styled.div`
  min-height: 1vh;
`;

const Header = styled.div`
  font-family: Gravity;
  font-style: normal;
  font-weight: bold;
  font-size: 0.25em;
  letter-spacing: 0.03em;
  text-indent: 2px;
  text-transform: uppercase;
`;

const Section = ({ title, subsections, basic }) => {
  const renderSubsections = subsections =>
    subsections.map(subsection => <Subsection {...subsection} />);
  const renderText = text =>
    text.map(entry => (
      <TextEntry dangerouslySetInnerHTML={{ __html: entry }} />
    ));
  return (
    <Container>
      <Line />
      <Header>{title}</Header>
      {basic ? renderText(subsections) : renderSubsections(subsections)}
    </Container>
  );
};

export default Section;
