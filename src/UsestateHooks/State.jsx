import React from 'react'
import { useState } from 'react'

export default function State() {
    let [a,b]=useState("10");
    let [num,setNum]=useState(0)
  return (
    <div>
        <h1>
            a value {a}
        </h1>
        <button
            onClick={
                ()=>{
                    b("30")
                }
            }
        >
            click to add
        </button>

        <h3>
            Number is {num}
        </h3>
        <button onClick={
            ()=>{
                setNum(num+1)
            }
        }>
            +
        </button>
    </div>
  )
}
