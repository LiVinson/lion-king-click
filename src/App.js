import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Instructions from "./components/Instructions"
import Wrapper from "./components/Wrapper"
import ImageCard from "./components/ImageCard"
import Footer from "./components/Footer"

const initialImages = [
  {
    id: 0,
    alt: "hyenas",
    img_url: `${process.env.PUBLIC_URL}/images/hyenas.jpg`,
    clicked: false
  },
  {
    id: 1,
    alt: "mufasa",
    img_url: `${process.env.PUBLIC_URL}/images/mufasa.jpg`,
    clicked: false
  },
  {
    id: 2,
    alt: "adult nala",
    img_url: `${process.env.PUBLIC_URL}/images/nala_adult.jpg`,
    clicked: false
  },
  {
    id: 3,
    alt: "young nala",
    img_url: `${process.env.PUBLIC_URL}/images/nala_young.png`,
    clicked: false
  },
  {
    id: 4,
    alt: "pumbaa",
    img_url: `${process.env.PUBLIC_URL}/images/pumbaa.png`,
    clicked: false
  },
  {
    id: 5,
    alt: "rafiki",
    img_url: `${process.env.PUBLIC_URL}/images/rafiki.jpg`,
    clicked: false
  },
  {
    id: 6,
    alt: "sarabi",
    img_url: `${process.env.PUBLIC_URL}/images/sarabi.png`,
    clicked: false
  },
  {
    id: 7,
    alt: "scar",
    img_url: `${process.env.PUBLIC_URL}/images/scar.jpeg`,
    clicked: false
  },
  {
    id: 8,
    alt: "adult simba",
    img_url: `${process.env.PUBLIC_URL}/images/simba_adult.jpg`,
    clicked: false
  },
  {
    id: 9,
    alt: "young simba",
    img_url: `${process.env.PUBLIC_URL}/images/simba_young.jpeg`,
    clicked: false
  },
  {
    id: 10,
    alt: "timon",
    img_url: `${process.env.PUBLIC_URL}/images/timon.png`,
    clicked: false
  },
  {
    id: 11,
    alt: "zazu",
    img_url: `${process.env.PUBLIC_URL}/images/zazu.jpg`,
    clicked: false
  }
]



function App() {


  const [gameState, setGameState] = useState({
    score: 0,
    topScore: 0,
    gameOver: false,
    gameWon: false,
    clickedImages: initialImages,
    selectedImageId: null
  })

  

  const shuffleArray = imageArray => {
    //Shuffles the image array each time the App is rendered
    let arr = imageArray
    let currentIndex = arr.length
    let tempValue
    let randomIndex

    while (0 !== currentIndex) {
      //while there are elements left to shuffle

      randomIndex = Math.floor(Math.random() * currentIndex) //pick a random index from 0 to currentIndex
      currentIndex--

      //Take the element at the random index, and swap it with the current index using temp as a placeholder
      tempValue = arr[currentIndex]
      arr[currentIndex] = arr[randomIndex]
      arr[randomIndex] = tempValue
    }
    return arr //Once all are shuffled, return array
  }




  const handleImageClick = imageId => {
    console.log(imageId)
    console.log("click ", gameState.clickedImages.find(image => image.id === imageId).alt)

      //If previously clicked image selected, lose game

      if (gameState.clickedImages.some((image => image.id === imageId && image.clicked))) {
        console.log("Lost");

        const resetImages = gameState.clickedImages.map(image => {
          image.clicked = false;
          return image
        })
        setGameState({
          ...gameState,
          gameOver: true,
          score: 0,
          gameWon:false,
          clickedImages: resetImages,
        })
      } else {
        console.log("correct")
        //if image not previously clicked, update clicked to true
        let newArr = gameState.clickedImages.map(image => image.id === imageId ? { ...image, clicked: true } : image)

        setGameState({
          ...gameState,
          score: gameState.score + 1,
          topScore: gameState.score + 1 >= gameState.topScore ? gameState.score + 1 : gameState.topScore,
          clickedImages: newArr,
          gameWon: gameState.score + 1 === gameState.clickedImages.length ? true : false,
          gameOver: false

        })
      }
    }

  






  return (
    <div>
      <Navbar
        currentScore={gameState.score}
        topScore={gameState.topScore}
        message={gameState.gameWon ? "" : "hide-text"}
      />
      <Instructions />
      <Wrapper>
        <div className="row">
          {shuffleArray(gameState.clickedImages).map(image => (
            <ImageCard
              key={image.id}
              id={image.id}
              imgURL={image.img_url}
              onClick={handleImageClick}
              cardClass={gameState.gameOver ? "incorrect red-border card" : "card"}
            />
          ))}
        </div>
      </Wrapper>
      <Footer />
    </div>
  )

}

export default App

/*



- On click of images
  -If new game - reset gameOver

- Determine game reset behavior 
    - If starting a new game, reset gameOver, gameWon, score


*/