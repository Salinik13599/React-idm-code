import React from 'react'
import { useContext } from 'react'
import { a } from './Main'

export default function Child1() {

    let answer=useContext(a)
    console.log(answer)
  return (
    <div>
        
    </div>
  )
}
