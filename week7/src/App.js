import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Celebirity from "./pages/Celebirity";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";
import TV from "./pages/TV";
import Header from "./Components/Header";
import Login from "./pages/Login";
import TVDetail from "./pages/TVDetail";

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
            <Route path="/tv/:name" element={<TVDetail />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;