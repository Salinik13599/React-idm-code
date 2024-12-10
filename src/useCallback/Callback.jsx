import React, { useCallback, useState } from 'react'

export default function Callback() {
    let [num,setNum]=useState(0);

    let value=useCallback(
        (a)=>{
            return num*a
        },[num]
    )

    console.log(value(2))
  return (
    <div>
        <h1>
            Count {num}
        </h1>
        <button onClick={()=>setNum(num+1)}>
            Click to add
        </button>
    </div>
  )
}
