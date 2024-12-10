import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Edit() {
    let [id,setId]=useState(0)
    let [name,setName]=useState("");
    let [age,setage]=useState("");
    let [place,setplace] = useState("");
    let api="http://localhost:2000"

    let page=useNavigate()
    function save(e){
        e.preventDefault()
        axios.put(`${api}/${id}`,{name,age,place}).then(()=>{
            alert("data updated")
            page("/create")
            localStorage.removeItem("id")
            localStorage.removeItem("name")
            localStorage.removeItem("age")
            localStorage.removeItem("place")
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setage(localStorage.getItem("age"))
        setplace(localStorage.getItem("place"))
    },[api])
  return (
    <div>
        <h1>
            update the data
        </h1>
          <form
            onSubmit={save}
        >
            <input type="text" placeholder='Enter Your name' value={name} onChange={
                (e)=>setName(e.target.value)
            }/>
<input type='number' placeholder='Enter your age'value={age} onChange={
                (e)=>setage(e.target.value)
            }/>
            <input type='text' placeholder='Enter your place'value={place} onChange={
                (e)=>setplace(e.target.value)
            }/>
            <input type="submit" />
        </form>
    </div>
  )
}
