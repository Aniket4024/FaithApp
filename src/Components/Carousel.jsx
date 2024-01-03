import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../CSS/Carousel.css";



export default function Carousel({data}) {

   

  return <div id="carousel">
    <Splide 
      id="main-splide"
      aria-label="My Favorite Images" 
      options={ {
        rewind: true,
        gap   : '40px',
        type   : 'loop',
        perPage: 1,
        perMove: 1,
        pagination:false ,
        autoplay:true,
        speed:500,
        // height:name==="UpcomingCategory" ? "300px" : "auto",
      } }
    >
      
      {
        data?.map((e)=>{
            return <SplideSlide>
            <div className="slide">
                <h2>{e?.text}</h2>
                <div id="reviewer-info">
                    <img src={e?.image} alt="" />
                    <div>
                        <h5>{e?.name}</h5>
                        <p>{e?.designation}</p>
                    </div>
                </div>
            </div>
          </SplideSlide>
        })
      }
      
    </Splide>
  </div>
}

