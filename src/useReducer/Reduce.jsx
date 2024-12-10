import React from 'react'
import { act } from 'react'
import { useReducer } from 'react'

export default function Reduce() {
    function demo(a,action){
       switch(action.type){
        case "+add":
            return {count:a.count+1}
        case "-":
            return {count:a.count-1}
       }
    }
    let [a,b]=useReducer(demo,{count:0})
    console.log(a)
  return (
    <div>
        <h2>
            {a.count}
        </h2>
        <button onClick={()=>b({type:"+add"})}>Add</button>
        <button onClick={()=>b({type:"-"})}>Minus</button>
    </div>
  )
}
