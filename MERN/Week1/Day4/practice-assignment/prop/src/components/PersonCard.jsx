import React, { Component } from 'react'



export default class PersonCard extends Component {


  render() {
    return (
        <div>
                <ul>{this.props.bloc.map((element,i)=>{

                return(
                <div key={i}>
                  <h1>{element.firstname}, {element.lastname}</h1>
                  <p>age: {element.age}</p>
                  <p>Hair Color: {element.HairColor}</p>
            </div>
            )

})}</ul> 
        </div>
    )
  }
}
