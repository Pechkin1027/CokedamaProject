import "../styles/globals.css";
import { ThemeProvider } from "styled-components";

const theme = {
  BoldText: "#2f3337",
  redText: "#c7202c",
  red: "#ff1f2c",
  lightGrey: "#f5f6f7",
  mobileS: "(min-width: 322px)",
  mobileM: "(min-width: 377px)",
  mobileL: "(min-width: 427px)",
  mobileXL: "(min-width: 540px)",
  tablet: "(min-width: 770px)",
  tabletL: "(min-width: 960px)",
  laptop: "(min-width: 1026px)",
  laptopM: "(min-width: 1222px)",
  laptopL: "(min-width: 1442px)",
  laptopSL: "(min-width: 1922px)",
  desktop: "(min-width: 2562px)",
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
