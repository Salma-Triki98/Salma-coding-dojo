import React from 'react'

const PersonCard = (props) => {
return (
    <div>
        <div>
            <h1>{ props.firstname }, { props.lastname }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
        </div>
    </div>
)
}

export default PersonCard