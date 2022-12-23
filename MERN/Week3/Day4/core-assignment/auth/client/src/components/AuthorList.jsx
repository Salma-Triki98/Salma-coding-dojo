import React from 'react';
import {Link} from 'react-router-dom';




const AuthorList = (props) => {
    const {authors,  deleteAuthor} =props
    console.log({authors});

    return (
    <div style={{marginLeft:"50%"}} >
        <table style={{backgroundColor: "red"}} >
            <thead>
                <tr style={{border: "1px solid" }}>
                    <th style={{border: "1px solid"}} >Author</th>
                    <th style={{border: "1px solid"}} >Actions available</th>
                </tr>
            </thead>
            <tbody>
                {authors.map((author)=>{
                    return(
                        <tr style={{border: "1px solid"}}  key={author._id}>
                            <td style={{border: "1px solid"}} >{author.name}</td>
                            <td style={{border: "1px solid"}} ><Link to={`/edit/${author._id}`}><button>Edit</button></Link> 
                            <Link to={`/details/${author._id}`}><button>Detils</button></Link> 
                            <button style={{color: "white", backgroundColor:'blue'}}  onClick={()=>{deleteAuthor(author._id)}}>Delete</button></td>
                        </tr>
                )
                })}
            </tbody>
        </table>
    </div>
)
}

export default AuthorList