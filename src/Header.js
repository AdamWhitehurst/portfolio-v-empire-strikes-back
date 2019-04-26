import React from "react";
import styled from "styled-components";

const Title = styled.div`
  width: 100%;
  font-family: NEOTERIC;
  font-style: normal;
  font-weight: bold;
  font-size: 1em;
  line-height: 2em;
  text-align: center;
  letter-spacing: 0.1rem;
  word-break: break-word;
  text-transform: uppercase;
`;

const AddressLine = styled.div`
  unicode-bidi: bidi-override;

  direction: rtl;
  font-family: Gravity;
  font-style: normal;
  font-weight: 100;
  font-size: 0.5em;
  line-height: 1em;
  word-break: break-word;
  text-align: center;
  letter-spacing: 0.01em;
  text-transform: uppercase;
`;

const Header = () => (
  <>
    <Title>Adam L. Whitehurst</Title>
    <AddressLine>{`04359 aC decreM truoC lanreV 4153`}</AddressLine>
    <AddressLine>{`moc.evil@tsruhetihW.madA 5929 928 (902)`}</AddressLine>
  </>
);

export default Header;
