import React from 'react'
import { useState } from 'react'

export default function useCounter(initial=0) {
    let [num,setNum]=useState(initial)
    const add=()=>{setNum(num+1)}
  return [num,add]
}
