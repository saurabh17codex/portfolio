import React, {useState} from 'react';
import {Button} from '@mui/material';

const ProjectSlides = () => {
  const items = ['Project Name','Project Description','Tech Stack'];
  const[curIndex, setCurIndex] = useState(0);
  const goToPrevSlide = () => {
    setCurIndex((prevIndex)=> {
      if(prevIndex===0){
        return items.length-1;
      } else{
        return prevIndex-1;
      }
    });
  };
  const goToNextSlide = () => {
    setCurIndex((prevIndex)=> {
      if(prevIndex===items.length-1){
        return 0;
      } else{
        return prevIndex+1;
      }
    });
  };
  return (
    <div>
      <h1>ProjectSlides</h1>
      {curIndex!==0 &&(<Button onClick={goToPrevSlide}>Prev</Button>)}
      {curIndex!== items.length-1 && (<Button onClick={goToNextSlide}>Next</Button>)}
      <h2>{items[curIndex]}</h2>
    </div>
    
  )
}

export default ProjectSlides;