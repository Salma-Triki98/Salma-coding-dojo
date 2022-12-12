import React, {useState, useEffect} from 'react';
import uuid from 'react-uuid';
import './List.css';

const TodoList = (props) => {
    const[content,setContent] = useState('');
    const[list,setList] = useState(JSON.parse(localStorage.getItem('tasks'))|| [])
    const onChangeHandler = (e) => {
        setContent(e.target.value);
    }
    const onSubmitHandler = (e)=> {
        e.preventDefault();
        if (content){
            setList([...list,{content, id:uuid() , isCompleted : false }]);//new Date().getTime().toString()
        setContent('');
        }
    };
    const removeTask = id => {
        const filtredList = list.filter (task => task.id !== id);
        setList(filtredList);
    };
    useEffect(()=> {
        localStorage.setItem('tasks', JSON.stringify(list));
    }, [list])
return (
    <div className='main'>
        <div className='form'>
            <form onSubmit={onSubmitHandler}>
                    <input type="text" name='content' value={content} onChange={onChangeHandler}  />
                    <input type="submit" value="Add" />
            </form>
        </div>
        {list.map((l)=> {
            return( 
            <div className='task' key={l.id}>
            <p  style={l.isCompleted ? {textDecoration: 'line-through'}: {textDecoration:'none'}}>{l.content}</p>
            <input type="checkbox" checked={l.isCompleted} onChange={e => {
                setList(prevList => {
                    const newList = prevList.map(item => 
                        item.content === l.content ? {...item, isCompleted: !item.isCompleted } : item
                    )
                    return newList
                })
            }}/>
            <button onClick={()=>removeTask(l.id)}>Delete</button>
           </div>
           )
        })}
    </div>
  )
}

export default TodoList