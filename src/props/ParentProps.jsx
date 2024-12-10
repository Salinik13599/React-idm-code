import React from 'react'
import ChildProps from './ChildProps'

export default function ParentProps() {
    let user="Shalini";
    let qualification="engg"
  return (
    <div>
        <ChildProps a={user} b={qualification}/>
    </div>
  )
}
