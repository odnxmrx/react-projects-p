import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

function ImageSlider({ url, limit = 5, page = 1 }) {

  //external API call
  const [myImages, setMyImages] = useState([]); //all images
  const [currentSlide, setCurrentSlide] = useState(0); //current image

  const [errorMessage, setErrorMessage] = useState(null); //error handling state

  const [loading, setLoading] = useState(false); //loading state

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?limit=${limit}&page=${page}`);
      const data = await response.json();

      //data && setMyImages(data);
      if (data) {
        setMyImages(data);
        setLoading(false);
      }

    } catch (error) { //handle error
      setErrorMessage(error.message);
      setLoading(false);
    }
  }

  //HANDLERS
  //handle prev - next fn() with arrow buttons
  function handlePreviousImage() {
    //if current is index 0; set to last item of array (myImages.length - 1)
    setCurrentSlide(currentSlide === 0 ? myImages.length - 1 : currentSlide - 1);
  }

  function handleNextImage() {
    //if current is last-index; set to beginning of array (0)
    setCurrentSlide(currentSlide === myImages.length - 1 ? 0 : currentSlide + 1);
  }


  useEffect(() => {
    if (url !== '') fetchImages(url);
  }, [url]);

  console.log("myImages after useeffect: ", myImages);

  //render loading
  if (loading) {
    return <div>
      <small>Loading data...</small>
    </div>
  }

  //if there's an error, display message
  if (errorMessage !== null) {
    return <small>
      {`Error encountered: ${errorMessage}`}
    </small>
  }

  return (
    <div className="myContainer">
      <BsArrowLeftCircleFill onClick={handlePreviousImage} className="arrow arrow-left" />
      {/* render images */}
      {
        myImages && myImages.length ?
          myImages.map((imageItem, imageIndex) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={currentSlide === imageIndex 
                ? "current-image" 
                : "current-image hide-current-image"}
            // width={"300px"}
            />
          ))
          :
          null
      }
      <BsArrowRightCircleFill onClick={handleNextImage} className="arrow arrow-right" />
      {/* circle indicator buttons */}
      <span className="circle-indicators">
        {
          myImages && myImages.length ?
            myImages.map((_, index) =>
              <button
                key={index}
                className={currentSlide === index 
                  ? "current-circle-indicator" 
                  : "current-circle-indicator inactive-current-circle-indicator"}
                // if this button is clicked, go to/set given index img
                onClick={()=> setCurrentSlide(index)}
              >
              </button>
            )
            : null
        }
      </span>
    </div>
  )
}

export default ImageSlider;