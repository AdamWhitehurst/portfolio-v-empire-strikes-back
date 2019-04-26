import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gravity';
    src: url('/fonts/Gravity-UltraLight.otf') format('opentype');
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gravity';
    src: url('/fonts/Gravity-Light.otf') format('opentype');
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gravity';
    src: url('/fonts/Gravity-Regular.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gravity';
    src: url('/fonts/Gravity-Book.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gravity';
    src: url('/fonts/Gravity-Bold.otf') format('opentype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gravity';
    src: url('/fonts/Gravity-UltraLightItalic.otf') format('opentype');
    font-weight: 100;
    font-style: italic;
  }
  @font-face {
    font-family: 'Gravity';
    src: url('/fonts/Gravity-LightItalic.otf') format('opentype');
    font-weight: 200;
    font-style: italic;
  }
  @font-face {
    font-family: 'Gravity';
    src: url('/fonts/Gravity-Italic.otf') format('opentype');
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: 'Gravity';
    src: url('/fonts/Gravity-BookItalic.otf') format('opentype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Gravity';
    src: url('/fonts/Gravity-BoldItalic.otf') format('opentype');
    font-weight: bold;
    font-style: italic;
  }
  @font-face {
    font-family: 'NEOTERIC';
    src: url('/fonts/NEOTERIC-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'NEOTERIC';
    src: url('/fonts/NEOTERIC-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    font-size: 16px; 
    font-size: 4vw;
  }

  body {
    font-family: 'Gravity', serif;
    background-color: #ededed;
    min-height: 100%;
    min-width: 100%;
  }
`;

export default GlobalStyle;
