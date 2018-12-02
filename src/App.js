import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import ImageCard from "./components/ImageCard";

const clickItems = [{
  id: 0,
  alt: "hyenas",
  img_url: "./images/hyenas.jpg",
  clicked: false
}, {
  id: 1,
  alt: "mufasa",
  img_url: "./images/mufasa.jpg",
  clicked: false
}, {
  id: 2,
  alt: "adult nala",
  img_url: "./images/nala_adult.jpg",
  clicked: false
}, {
  id: 3,
  alt: "young nala",
  img_url: "./images/nala_young.png",
  clicked: false
}, 
{
  id: 4,
  alt: "pumbaa",
  img_url: "./images/pumbaa.png",
  clicked: false
},
{
  id: 5,
  alt: "rafiki",
  img_url: "./images/rafiki.jpg",
  clicked: false
},
{
  id: 6,
  alt: "sarabi",
  img_url: "./images/sarabi.png",
  clicked: false
},
{
  id: 7,
  alt: "scar",
  img_url: "./images/scar.jpeg",
  clicked: false
},
{
  id: 8,
  alt: "adult simba",
  img_url: "./images/simba_adult.jpg",
  clicked: false
},
{
  id: 9,
  alt: "young simba",
  img_url: "./images/simba_young.jpeg",
  clicked: false
},
{
  id: 10,
  alt: "timon",
  img_url: "./images/timon.png",
  clicked: false
}, {
  id: 11,
  alt: "zazu",
  img_url: "./images/zazu.jpg",
  clicked: false
}];

class App extends Component {

  state = {
    clickedStatus: [0,0,0,0,0,0,0,0,0,0,0,0],
    topScore: 0
  }

  shuffleArray = (imageArray) => { //Shuffles the image array each time the App is rendered
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
    console.log(imageId);
      if (this.state.clickedStatus[imageId]) {
          this.gameOver();
      }
      else { //if image not previously clicked, update state at index of image to 1
        let newArr = this.state.clickedStatus;
        newArr[imageId] = 1;
        if (this.state.topScore > this.calculateScore()) {
          //pickle
        }
        this.setState({
          clickedImage: newArr
        })
      }
  }


  calculateScore = (arr) => { //Creates an array based on clicked status, and returns the length to calculate the score.
    let clickedArr = arr.filter(image => image === 1);
    return clickedArr.length;
  }

  gameOver = () => {
    console.log("game over");
  }



  render() {
    return (
      <div>
        <Navbar score={this.calculateScore(this.state.clickedStatus)} />
        <Jumbotron />
        <Wrapper>
          <div className="row">
              {this.shuffleArray(clickItems).map(image => (
                <ImageCard key={image.id} id={image.id} imgURL={image.img_url} onClick={this.determineClickStatus}/>
              ))}
            </div>
        </Wrapper>
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
        - Display you guessed correctly in navbar
        - Increment the score
        - If current score > top score, reset the top score to current score
        - If score = max score: 
        - Shuffle the order of 16 images
        -
      If image was previously clicked:
        - Shake the images? 
        - Diplay you guessed incorrectly in the navbar
        - Reset current score to 0
        - Reset all images to not clicked
        - Shuffle the 16 images
*/
