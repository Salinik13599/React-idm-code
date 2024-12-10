import React from 'react'
import { useContext } from 'react'
import { a } from './Main'

export default function Child2() {
    let a1=useContext(a)
  return (
    <div>Child2,{a1}</div>
  )
}
