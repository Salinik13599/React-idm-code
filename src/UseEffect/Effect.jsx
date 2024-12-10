import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function Effect() {
    let [num,setNum]=useState(0);

    useEffect( 
        ()=>{
            document.title="page rendered "+num;
            fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))
        },[num]
    )
  return (
    <div>
        <h3>
            {num}
        </h3>
        <button onClick={()=>setNum(num+1)}>
            Click
        </button>
    </div>
  )
}
