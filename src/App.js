import { ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import './sass/main.scss';
import { PrimaryMainTheme } from "./theme";

function App() {
  return (
    <div className="App container">
      <ThemeProvider theme={PrimaryMainTheme}>
        <Header />
        <Sidebar />
      </ThemeProvider>
    </div>
  );
}

export default App;
