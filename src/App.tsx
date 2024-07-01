import { Box } from "@mui/material";
import ThemeProvider from "./../src/theme";
import CommonButton from "./component/Button";
function App() {
  return (
    <ThemeProvider>
      <Box>Hello</Box>
      <div style={{ color: "black" }}>Hello World</div>
      <CommonButton />
    </ThemeProvider>
  );
}

export default App;
