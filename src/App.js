import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Instructions from "./components/Instructions";
import Wrapper from "./components/Wrapper";
import ImageCard from "./components/ImageCard";
import Footer from "./components/Footer";

const clickItems = [{
  id: 0,
  alt: "hyenas",
  img_url: "./images/hyenas.jpg",
}, {
  id: 1,
  alt: "mufasa",
  img_url: "./images/mufasa.jpg",
}, {
  id: 2,
  alt: "adult nala",
  img_url: "./images/nala_adult.jpg",
}, {
  id: 3,
  alt: "young nala",
  img_url: "./images/nala_young.png",
}, 
{
  id: 4,
  alt: "pumbaa",
  img_url: "./images/pumbaa.png",
},
{
  id: 5,
  alt: "rafiki",
  img_url: "./images/rafiki.jpg",
},
{
  id: 6,
  alt: "sarabi",
  img_url: "./images/sarabi.png",
},
{
  id: 7,
  alt: "scar",
  img_url: "./images/scar.jpeg",
},
{
  id: 8,
  alt: "adult simba",
  img_url: "./images/simba_adult.jpg",
},
{
  id: 9,
  alt: "young simba",
  img_url: "./images/simba_young.jpeg",
},
{
  id: 10,
  alt: "timon",
  img_url: "./images/timon.png",
}, {
  id: 11,
  alt: "zazu",
  img_url: "./images/zazu.jpg",
}];

class App extends Component {

  state = {
    clickedStatus: [0,0,0,0,0,0,0,0,0,0,0,0],
    topScore: 0,
    gameOver: false,
    wonGame: false
  }

  shuffleArray = imageArray => { //Shuffles the image array each time the App is rendered
    let arr = imageArray;
    let currentIndex = arr.length;
    let tempValue;
    let randomIndex;

    while (0 !== currentIndex) { //while there are elements left to shuffle

      randomIndex = Math.floor(Math.random() * currentIndex) //pick a random index from 0 to currentIndex
      currentIndex--;

      //Take the element at the random index, and swap it with the current index using temp as a placeholder
      tempValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = tempValue; 
    }
    return arr; //Once all are shuffled, return array
  }

  determineClickStatus = imageId => { //arrow function allows this to represent the App object instance


      if (this.state.clickedStatus[imageId]) {
          this.lostGame();
      }
      else { //if image not previously clicked, update state at index of image to 1
        let newArr = this.state.clickedStatus;
        newArr[imageId] = 1;

        let currentScore = this.calculateScore(this.state.clickedStatus);
        let topScore = this.state.topScore;


        if (currentScore > topScore) {
          topScore = currentScore;
        }

        if (currentScore === 12) { //If all images clicked, end the game
          this.wonGame(newArr, topScore);
        } else {
          this.setState({ //Continue playing
            clickedImage: newArr,
            topScore: topScore,
            gameOver: false,
            wonGame: false
          })
        }


      }
  }


  calculateScore = arr => { //Creates an array based on clicked status, and returns the length to calculate the score.
    let clickedArr = arr.filter(image => image === 1);
    return clickedArr.length;
  }

  lostGame = () => {
    //Add logic to determine if won or loss
    this.setState({
      clickedStatus: [0,0,0,0,0,0,0,0,0,0,0,0],
      gameOver: true
    })
  }

  wonGame = (newArr, topScore) => {
    console.log("you won");

    this.setState({ 
      clickedStatus: [0,0,0,0,0,0,0,0,0,0,0,0],
      topScore: topScore,
      wonGame: true

  })
}




  render = () => {
    return (
      <div>
        <Navbar 
          currentScore={this.calculateScore(this.state.clickedStatus)} 
          topScore={this.state.topScore}
          message = {this.state.wonGame ? "" : "hide-text"}
          />
        <Instructions/>
        <Wrapper>
          <div className="row">
              {this.shuffleArray(clickItems).map(image => (
                <ImageCard 
                  key={image.id} 
                  id={image.id} 
                  imgURL={image.img_url} 
                  onClick={this.determineClickStatus}
                  cardClass={this.state.gameOver ? "incorrect red-border card" : "card"}/>
              ))}
            </div>
        </Wrapper>
        <Footer />
      </div>

    );
  }
}

export default App;

/* PseudoCode 
  //ON load: 
    Navbar with starting score and top score
    Jumbotron with instructions
    Wrapper with 12 unique images (4 * 3), displayed in random order

  //On click of image:
      If image was not previously clicked: 
        - Increment the score
        - If current score > top score, reset the top score to current score
        - If score = max score: **
        - Shuffle the order of 12 images
        
      If image was previously clicked:
        - Shake the images?
        - Reset current score to 0
        - Reset all images to not clicked
        - Shuffle the 12 images
*/
