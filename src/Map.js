import React from "react";

function Map(currentImg, handleClick) {
  
  function clickArea(imgId){
    alert("clickArea for image " + imgId);
  }
  function handleClick(imgId){
    () => this.handleClick(imgId)
    if(imgId == currentImg){
      alert("You guessed it correctly!");
    } else {
      alert("incorrect guess. You guessed image " + imgId);
    }
  }
  function clickGeneral(){
    console.log("clicked on campusmap");
  }
  
  return (
    <div>
      
    </div>
  )
  
}

export default Map;