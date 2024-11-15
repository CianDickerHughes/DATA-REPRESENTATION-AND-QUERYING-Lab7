import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Read from './components/Read';
import Create from './components/Create';
import Movies from './components/Movies';


// app controls and navigation
function App() {
  return (
    <Router>
      <NavigationBar /* navbar with routing *//>
      <Routes>
        <Route path="/" element={<Content /> /* The Content page */} />
        <Route path="/read" element={<Read />/* The Read page */} />
        <Route path="/create" element={<Create />/* The Create page */} />
      </Routes>
    </Router>
  );
}

export default App;