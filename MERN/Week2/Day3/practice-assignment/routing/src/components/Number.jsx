import React from 'react'
import { useParams } from "react-router"; 

const Number = (props) => {
    const { number } = useParams();
    console.log(number);
  return (
    isNaN(+number)?
    <h3>The word is : { number }</h3>: <h3>The number is : { number }</h3>
  )
  }
export default Number