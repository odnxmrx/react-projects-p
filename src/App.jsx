import './App.css'
import Accordion from './components/01-Accordion/Accordion'
import RandomColor from './components/02-RandomColor/RandomColor'
import StarRating from './components/03-StarRating/StarRating'
import ImageSlider from './components/04-ImageSlider/ImageSlider'
import LoadMoreBtn from './components/05-LoadMoreBtn/LoadMoreBtn'

function App() {

  return (
    <>
    {/* 01 - Accordeon App */}
    {/* <Accordion /> */}

    {/* 02 - Random color generator */}
    {/* <RandomColor /> */}

    {/* 03 - Star rating */}
    {/* <StarRating numberOfStars={5} /> */}

    {/* 04 - image slider */}
    {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"5"} /> */}


    {/* 05 - Load More Products on Button Click */}
    <LoadMoreBtn />

    </>
  )
}

export default App
