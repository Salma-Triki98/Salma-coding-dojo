import React from 'react';
import { useParams } from "react-router"; 

const Color = (props) => {
    const { number } = useParams();
    const { color } = useParams();
    const { col } = useParams();
  return (
        isNaN(+number)?
        <h3 style= {{height: "75px",backgroundColor:col, color:color , paddingTop:"50px"}} >The word is : {number}</h3>: console.error(1)
  )
}

export default Color