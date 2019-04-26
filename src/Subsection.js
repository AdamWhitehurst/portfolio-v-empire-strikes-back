import React from "react";
import styled from "styled-components";

import TextEntry from "./TextEntry";

const Container = styled.div`
  margin-top: 0.25em;
  min-height: 1vh;
  /* background-color: yellow; */
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Title = styled.div`
  font-family: NEOTERIC;
  font-style: normal;
  font-weight: bold;
  font-size: 0.4em;
  flex: 5;
`;

const Date = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
  font-family: Gravity;
  font-style: normal;
  font-weight: 350;
  font-size: 0.25em;
  text-align: right;
  align-items: flex-end;
`;

const Subtitle = styled.div`
  font-family: Gravity;
  font-style: italic;
  font-weight: 200;
  font-size: 0.3em;
  line-height: 0.8em;
  letter-spacing: 0.08em;
  padding-top: 0.6em;
  padding-bottom: 0.8em;
`;

const Subsection = ({ title, subtitle, date, text }) => {
  const renderText = text => text.map(entry => <TextEntry>{entry}</TextEntry>);

  return (
    <Container>
      <HeaderContainer>
        {title && <Title>{title}</Title>}
        {date && <Date>{date}</Date>}
      </HeaderContainer>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {text && renderText(text)}
    </Container>
  );
};

export default Subsection;
