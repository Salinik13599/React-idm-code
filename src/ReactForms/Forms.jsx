import React, { useState } from 'react'

export default function Forms() {
    let [name,setName]=useState("")
    let [err,setError]=useState("")
    let [data,setData]=useState("")

    function save(e){
        e.preventDefault()
        if(name===""){
            setError("Plese enter the Required filed")
        }
        else{
            console.log(name)
            setError("")
            setData(name)
        }

        
    }
  return (
    <div>
        <form onSubmit={save}>
            <input type="text"  placeholder='enter name here' name='user' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="submit" />
        </form>
        <h2>
            {err}
        </h2>
        <li>
            {data}
        </li>
    </div>
  )
}
