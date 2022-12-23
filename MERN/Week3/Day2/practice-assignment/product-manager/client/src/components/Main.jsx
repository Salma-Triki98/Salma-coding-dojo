import React,{useState,useEffect} from 'react'
import axios  from 'axios';



const Main = (props) => {
    const [inputs, setInputs] = useState({title:"", price:0, description:""});

    const handleSubmit = e =>{
        e.preventDefault()
        const newProduct= {
            title: inputs.title,
            price: inputs.price,
            description: inputs.description
        }
        console.log(newProduct);

            axios.post('http://127.0.0.1:8000/api/project', newProduct)
            .then(res=>console.log(res))
                .catch(err=>console.log(err.data))
        }

  return (
    <div>
        <h1>Product Manager</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input value={inputs.title}  onChange={(e)=>setInputs({...inputs, title: e.target.value})}/>
            </div>
            <div>
                <label>Price</label>
                <input type="number" value={inputs.price} onChange={(e)=>setInputs({...inputs, price: e.target.value})}/>
            </div>
            <div>
                <label>Description</label>
                <input value={inputs.description} onChange={(e)=>setInputs({...inputs, description: e.target.value})} />
            </div>
            <input type="submit" value="Create"/>
        </form>
        <hr/>
    </div>
  )
}
 
export default Main