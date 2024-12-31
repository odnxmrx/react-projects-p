import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Accordion from './components/01-Accordion/Accordion';
import RandomColor from './components/02-RandomColor/RandomColor';
import StarRating from './components/03-StarRating/StarRating';
import ImageSlider from './components/04-ImageSlider/ImageSlider';
import LoadMoreBtn from './components/05-LoadMoreBtn/LoadMoreBtn';
import TreeMenu from './components/06-TreeMenu/TreeMenu';
import DrumMachine from './components/07-DrumMachine/DrumMachine';

function App() {
  return (
    <Router>
      <>
        <nav>
          <ul>
            <li><Link to="/accordion">Accordion</Link></li>
            <li><Link to="/random-color">Random Color Generator</Link></li>
            <li><Link to="/star-rating">Star Rating</Link></li>
            <li><Link to="/image-slider">Image Slider</Link></li>
            <li><Link to="/load-more">Load More Products</Link></li>
            <li><Link to="/tree-menu">Tree Menu</Link></li>
            <li><Link to="/drum-machine">Drum Machine</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/random-color" element={<RandomColor />} />
          <Route path="/star-rating" element={<StarRating numberOfStars={5} />} />
          <Route path="/image-slider" element={<ImageSlider url="https://picsum.photos/v2/list" page="1" limit="5" />} />
          <Route path="/load-more" element={<LoadMoreBtn />} />
          <Route path="/tree-menu" element={<TreeMenu />} />
          <Route path="/drum-machine" element={<DrumMachine />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
