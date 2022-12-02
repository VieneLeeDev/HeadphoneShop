import React, { useState } from 'react';
import './SliderItem.css';
import dataSlider from './dataSlider';

function SliderItem(){
  const [indexSlide,setIndexSlide]= useState(1);

  const handleClickSlide = () =>{
      if(indexSlide !== dataSlider.length){
        setIndexSlide(indexSlide + 1);
        console.log(indexSlide);
      }
      else {
        setIndexSlide(1);
      }
  }
  
    return(
      <div className="container-slider" onClick={handleClickSlide}>
        {
          dataSlider.map((item,index)=>{
              return <div
              className={item.id === indexSlide? 'item_slide' : 'item_hide'} 
              key={item.id}> 
                  <img src={indexSlide === index +1? item.url: index = indexSlide}></img>
              </div>
          })
        }
      </div>
    )
}

export default SliderItem
