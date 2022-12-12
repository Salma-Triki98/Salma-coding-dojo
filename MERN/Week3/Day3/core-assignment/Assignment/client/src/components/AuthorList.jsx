import React from 'react';
import {Link} from 'react-router-dom';




const AuthorList = (props) => {
    const {authors,  deleteAuthor} =props
    console.log({authors});

    return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions available</th>
                </tr>
            </thead>
            <tbody>
                {authors.map((author)=>{
                    return(
                        <tr key={author._id}>
                            <td>{author.name}</td>
                            <td><Link to={`/edit/${author._id}`}><button>Edit</button></Link> 
                            <Link to={`/details/${author._id}`}><button>Detils</button></Link> 
                            <button onClick={()=>{deleteAuthor(author._id)}}>Delete</button></td>
                        </tr>
                )
                })}
            </tbody>
        </table>
    </div>
)
}

export default AuthorList