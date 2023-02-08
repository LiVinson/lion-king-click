import React from "react";
import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Instructions from "./components/Instructions"
import Wrapper from "./components/Wrapper"
import ImageCard from "./components/ImageCard"
import Footer from "./components/Footer"


interface Image {
  id: string;
  alt: string;
  img_url: string;
  clicked: boolean;
}


const initialImages: Image[] = [
  {
    id: "0",
    alt: "hyenas",
    img_url: `${process.env.PUBLIC_URL}/images/hyenas.jpg`,
    clicked: false
  },
  {
    id: "1",
    alt: "mufasa",
    img_url: `${process.env.PUBLIC_URL}/images/mufasa.jpg`,
    clicked: false
  },
  {
    id: "2",
    alt: "adult nala",
    img_url: `${process.env.PUBLIC_URL}/images/nala_adult.jpg`,
    clicked: false
  },
  {
    id: "3",
    alt: "young nala",
    img_url: `${process.env.PUBLIC_URL}/images/nala_young.png`,
    clicked: false
  },
  {
    id: "4",
    alt: "pumbaa",
    img_url: `${process.env.PUBLIC_URL}/images/pumbaa.png`,
    clicked: false
  },
  {
    id: "5",
    alt: "rafiki",
    img_url: `${process.env.PUBLIC_URL}/images/rafiki.jpg`,
    clicked: false
  },
  {
    id: "6",
    alt: "sarabi",
    img_url: `${process.env.PUBLIC_URL}/images/sarabi.png`,
    clicked: false
  },
  {
    id: "7",
    alt: "scar",
    img_url: `${process.env.PUBLIC_URL}/images/scar.jpeg`,
    clicked: false
  },
  {
    id: "8",
    alt: "adult simba",
    img_url: `${process.env.PUBLIC_URL}/images/simba_adult.jpg`,
    clicked: false
  },
  {
    id: "9",
    alt: "young simba",
    img_url: `${process.env.PUBLIC_URL}/images/simba_young.jpeg`,
    clicked: false
  },
  {
    id: "10",
    alt: "timon",
    img_url: `${process.env.PUBLIC_URL}/images/timon.png`,
    clicked: false
  },
  {
    id: "11",
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
    images: initialImages,
    selectedImageId: null
  })

  //Restart game state when starting new game
  useEffect(()=> {
    if(gameState.gameOver) {
      setGameState({
        ...gameState,
        score:0,
        gameWon: false,

      })
    }
  }, [gameState.gameOver])


  //Check if game was won
  useEffect(()=> {
    if (gameState.score >= gameState.images.length) {
      gameOver(true);
    }
  }, [gameState.score])

  const shuffleArray = (imageArray: Image[]) => {
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

  const handleImageClick = (imageId: string) => {

      //If previously clicked image selected, lose game
      if (gameState.images.some((image => image.id === imageId && image.clicked))) {
        gameOver(false);
      } else {
        //if image not previously clicked, update clicked to true, increment score, top score
        let newArr = gameState.images.map(image => image.id === imageId ? { ...image, clicked: true } : image)

        setGameState({
          ...gameState,
          score: gameState.score + 1,
          topScore: gameState.score + 1 >= gameState.topScore ? gameState.score + 1 : gameState.topScore,
          images: newArr,
          gameOver: false
        })
      }
    }

  
const gameOver = (gameWon: boolean) => {
  const resetImages = gameState.images.map(image => {
    image.clicked = false;
    return image
  })

  setGameState({
    ...gameState,
    images: resetImages,
    gameWon: gameWon,
    gameOver: true
  })
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
          {shuffleArray(gameState.images).map(image => (
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

export default App;

