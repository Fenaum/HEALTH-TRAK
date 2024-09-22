import Navbar from "./components/Layout/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, Diary, Settings, UserProfile} from "./pages"

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/UserProfile" element={<UserProfile />} />
        </Routes>
    </Router>
  );
}

export default App;

