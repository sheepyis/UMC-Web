import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Celebirity from "./pages/Celebirity";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";
import TV from "./pages/TV";
import Header from "./Components/Header";

function App() {
  return (
    <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/person" element={<Celebirity />} />
            <Route path="/movie" element={<Movies />} />
            <Route path="/movie/:title" element={<MovieDetail />} />
            <Route path="/tv" element={<TV />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;