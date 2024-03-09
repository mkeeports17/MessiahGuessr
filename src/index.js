import * as React from "react";
import {useState, useEffect} from 'react';
import * as ReactDOM from "react-dom/client";
import map from "./images/map.png";
import img0 from "./images/boyer.jpeg";
import img1 from "./images/cairn.jpeg";
import img2 from "./images/clock.jpeg";
import img3 from "./images/hitchcock.jpeg";
import img4 from "./images/hostetter.jpeg";
import img5 from "./images/hydrant.jpeg";
import img6 from "./images/jordan.jpeg";
import img7 from "./images/north.jpeg";
import img8 from "./images/phipps.jpeg";
import img9 from "./images/blank.png";
import './style.css';

function Main() {
  
  const images = [img0, img1, img2, img3, img4, img5, img6, img7, img8];
  const [currentImg, setCurrentImg] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(3);
  const [isVisibleE, setIsVisibleE] = useState(false);
  const [isVisibleA, setIsVisibleA] = useState(false);
  const [isVisibleC, setIsVisibleC] = useState(false);
  const [isVisibleI, setIsVisibleI] = useState(false);



  useEffect(() => {const timeoutId = setTimeout(() => {setIsVisibleE(false);}, 2000);
    return () => clearTimeout(timeoutId);}, [isVisibleE]);
  useEffect(() => {const timeoutId = setTimeout(() => {setIsVisibleC(false);}, 2000);
    return () => clearTimeout(timeoutId);}, [isVisibleC]);
  useEffect(() => {const timeoutId = setTimeout(() => {setIsVisibleA(false);}, 2000);
    return () => clearTimeout(timeoutId);}, [isVisibleA]);
  useEffect(() => {const timeoutId = setTimeout(() => {setIsVisibleI(false);}, 2000);
    return () => clearTimeout(timeoutId);}, [isVisibleI]);
 
  function nextImg(){
    /*currentImg = Math.floor(Math.random()*10);*/
    setIsVisibleI(true);
    setCurrentImg(currentImg+1);
    setAttempts(3);
    if(currentImg == images.length-1 || currentImg < 0){
      setCurrentImg(0);
      setScore(0);
    }
    console.log(currentImg);
  }
  function handleClick(imgId){
    if(imgId == currentImg){
      clickCorrect();
    } else {
      clickGeneral();
    }
  }
  function clickCorrect(){
    setIsVisibleC(true);
    setScore(score+1);
    nextImg();
  }
  function clickGeneral(){
    if(attempts <= 1){
      setIsVisibleA(true);
      nextImg();
      setAttempts(3);
    } else {
      setAttempts(attempts-1);
      setIsVisibleE(true);
    }
  }


  return (
    
    <div>
        <div>
          {!isVisibleI && <img src={images[currentImg]} alt="didn't work :/" width="500px" height="667"/>}
          {isVisibleI && <img src={img9} alt="didn't work :/" width="500px" height="667"/>}
        </div>
        <img src={map} alt="didn't work :/" useMap="#campusmap" width="731px" height="550px"/>
          <map name="campusmap">
            <button style={{display:"none"}} onClick={() => handleClick(0)}> <area shape="circle" coords="330,450,15"/></button>
            <button style={{display:"none"}} onClick={() => handleClick(1)}> <area shape="circle" coords="490,300,20"/></button>
            <button style={{display:"none"}} onClick={() => handleClick(2)}> <area shape="circle" coords="455,395,15"/></button>
            <button style={{display:"none"}} onClick={() => handleClick(3)}> <area shape="circle" coords="390,195,20"/></button>
            <button style={{display:"none"}} onClick={() => handleClick(4)}> <area shape="circle" coords="380,420,10"/></button>
            <button style={{display:"none"}} onClick={() => handleClick(5)}> <area shape="circle" coords="555,255,15"/></button>
            <button style={{display:"none"}} onClick={() => handleClick(6)}> <area shape="circle" coords="550,295,15"/></button>
            <button style={{display:"none"}} onClick={() => handleClick(7)}> <area shape="circle" coords="650,130,15"/></button>
            <button style={{display:"none"}} onClick={() => handleClick(8)}> <area shape="circle" coords="350,305,15"/></button>
            <button style={{display:"none"}} onClick={clickGeneral}> <area shape="rect" coords="0,0,765,560"/></button>
          </map>
          <div className="org" id="firstdiv">
            <h3>Image {currentImg+1} of 9</h3>
            <h3>{score} out of {currentImg} correct!</h3>
            //style for this special button received from the following resource
            //https://webdeasy.de/en/top-css-buttons-en/
            <button className="special" onClick={nextImg}>Skip Image</button>
          </div>
          <div className="org">
            {isVisibleA && <h3 style={{color:"red"}}>Attempts exhausted. Next Image!</h3>}
            {isVisibleE && <h3 style={{color:"#ff4500"}}>Incorrect guess. {attempts} attempt(s) left.</h3>}
            {isVisibleC && <h3 style={{color:"green"}}>You guessed it correctly!</h3>}
            <h3>
              Click on the map the location of the picture on the left. 
              It will let you keep trying for 3 attempts. You can skip an image as well.
            </h3>
          </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);