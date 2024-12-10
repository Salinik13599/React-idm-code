import React, { useEffect, useRef, useState } from 'react'

export default function Ref() {
    let [name,setName]=useState("")
    let count=useRef(0)
    console.log(count)
    let user=useRef("")


    useEffect(
        ()=>{
            count.current+=1  //a+=1 a=a+1
            user.current=name
        },[name]
    )
  return (
    <div>
        <textarea value={name} onChange={(e)=>setName(e.target.value)}></textarea>
        <h1>
            {name}
            <br />
            previous state {user.current}
        <br />
            {count.current}
        </h1>
    </div>
  )
}
