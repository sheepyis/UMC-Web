import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Weather from "./pages/Weather";
import Login from "./pages/Login";

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Weather />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;