
import React, { useState } from 'react'

const CreateTodo = () => {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [isCompleted,setIsCompleted] = useState(false)


    const addTodo = async()=>{
        const response = await fetch('http://localhost:3004/todo', {
            method: "POST",
            body:JSON.stringify({
                title:title,
                description:description
            }),
            headers:{
                "content-type":"application/json"
        }})
        alert("todo added")

    }
  return (
    <div>
        <input style={{padding:10,margin:10}} type="text" placeholder='title' onChange={(e)=> setTitle(e.target.value)} />
        <input style={{padding:10,margin:10}} type="text" placeholder='description' onChange={(e)=> setDescription(e.target.value)} />
        <button style={{padding:10,margin:10}} onClick={ addTodo }>Add Todo</button>
    </div>
  )
}

export default CreateTodo