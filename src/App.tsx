import { Box, useTheme } from "@mui/material";
import ThemeProvider from "./../src/theme";
import CommonButton from "./component/Button";
function App() {
  const theme = useTheme();
  return (
    <ThemeProvider>
      <Box>Hello</Box>
      <div
        style={{ color: "black", background: theme.palette.background.neutral }}
      >
        Hello World
      </div>
      <CommonButton />
    </ThemeProvider>
  );
}

export default App;
