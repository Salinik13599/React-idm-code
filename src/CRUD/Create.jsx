import React, { useState } from 'react'
import axios from "axios"
import View from './View'

export default function Create() {
    let [name,setName]=useState("")
    let [age,setAge]=useState(0)
    let api="http://localhost:2000"
    function save(e){
        e.preventDefault();
        axios.post(api,{name,age}).then((s)=>{
            console.log(s)
            alert("Data saved!!!")
            setAge(0)
            setName("")
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>
        <h1>
            Uploading data
        </h1>

        <form onSubmit={save}>
            <input type="text" placeholder='Enter name here' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="number" placeholder='Enter Age here'  value={age} onChange={(e)=>setAge(e.target.value)}/>
            <input type="submit" />
        </form>

        <View />
    </div>
  )
}
