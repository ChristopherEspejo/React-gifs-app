import React from "react";

import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  /*     5AdvgQGefQxfVUxsErHy1jZ52qlhvyfX */
  
  const {data, loading} = useFetchGifs(category);

  return (
    <>
      
        <h3 className=" animate__animated animate__fadeIn">{category}</h3>
        {loading&&<p className=" animate__animated animate__fadeIn">Loading</p> }
        {<div className="card-grid">
            {
                data.map(img=>{
                return <GifGridItem key={img.id} {...img} />
                })
            }
        
        
        </div>}
    </>
  );
};
