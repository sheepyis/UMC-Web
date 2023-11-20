import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Weather from "./pages/Weather";

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route  path="/" element={<Weather />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;