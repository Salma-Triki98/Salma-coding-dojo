import React from 'react'

const DisplayBox = (props) => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '50px',
    }}>
        {props.box.map((b, index) => {
            return <div  key={index} style={{
                backgroundColor: b.color,
                width: `${b.width}px`,
                height: `${b.height}px`,
            }}></div>
        })}
    </div>
  )
}

export default DisplayBox