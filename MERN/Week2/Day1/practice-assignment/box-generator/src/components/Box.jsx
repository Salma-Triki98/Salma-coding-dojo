import React, {useState} from 'react'

const Box = (props) => {
    // const [input, setInput] = useState('');
    const [color, setColor] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');

const submitHandler = (e) => {
    
        e.preventDefault();
        // const newinput={input}
        // props.Addbox(input);
        const newbox={
            color,
            width,
            height
        }
        console.log(newbox);
        props.setBox([...props.box, newbox]);
        setColor("");
        setWidth("");
        setHeight("");

    }
  return (
    <div>
        <form  onSubmit={submitHandler} >
            <label>Color</label>
            <input onChange={(e) => {
                    setColor(e.target.value)
                }}  value={color}/>
                <label>Width</label>
            <input onChange={(e) => {
                    setWidth(e.target.value)
                }}  value={width}/>
                <label>Height</label>
            <input onChange={(e) => {
                    setHeight(e.target.value)
                }}  value={height}/>
            < input type="submit" value="Add" />
                
            
        </form>
    </div>
  )
  }

  export default Box