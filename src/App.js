import { ThemeProvider } from "@mui/material";
import './sass/main.scss';
import { PrimaryMainTheme } from "./theme";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from "./pages/dashboard-components/dashboard";
import ScheduleCall from "./pages/dashboard-components/scheduleCall";

function App() {
  return (
    <div className="App bg-ash">
      <ThemeProvider theme={PrimaryMainTheme}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/dashboard/schedule-calls" element={<ScheduleCall />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
