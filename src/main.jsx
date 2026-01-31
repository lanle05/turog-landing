import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./styles/main.scss";
import App from "./App.jsx";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  colors: {
    brandOrange: [
      "#fff2e2",
      "#ffe4ce",
      "#f9c8a1",
      "#f4a96f",
      "#f09650", // [5] - main brand orange
      "#ed7f2a",
      "#ec771b",
      "#d2650d",
      "#bc5906",
      "#a44b00",
    ],
    brandGrey: [
      "#f4f5f6",
      "#e7e7e7",
      "#cdcdcd",
      "#b0b1b1",
      "#97999b",
      "#878a8e",
      "#7e8389",
      "#6b7177",
      "#5e646b",
      "#212529", // [9] - main brand grey
    ],
    brandOrangish: [
      "#fff3e7",
      "#fbe5d3",
      "#f6c9a6",
      "#f1aa74",
      "#ed914a",
      "#eb8130",
      "#ea7822",
      "#d06616",
      "#b1560f", // [8] - main brand orangish
      "#a24c05",
    ],
    brandLightGrey: [
      "#edf6fd",
      "#e3e8ec",
      "#cacdd1",
      "#adb2b6",
      "#959a9f",
      "#858c92",
      "#7c848c",
      "#6c757d", // [7] - main brand lightgrey
      "#5b656e",
      "#4a5864",
    ],
    brandCream: [
      "#fffaf1", //main brand cream [0]
      "#fdeed5",
      "#fcdca4",
      "#fcc96f",
      "#fcb844",
      "#fcae2d",
      "#fca823",
      "#e19318",
      "#c88210",
      "#ad6f00",
    ],
    brandBackgroundGray: [
      "#eff5fc",
      "#e9ecef", //main brand background gray [1]
      "#c7cdd3",
      "#a9b1ba",
      "#8f9aa5",
      "#7e8b99",
      "#748494",
      "#627181",
      "#556575",
      "#455769",
    ],
  },
  primaryColor: "brandOrange",
  primaryShade: 4,
  fontFamily: "Poppins, static, light",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>,
);
