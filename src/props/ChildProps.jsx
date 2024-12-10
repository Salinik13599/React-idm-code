import React from 'react'

export default function ChildProps(values) {
    console.log(values)
  return (
    <div>
        <h1>
            {values.a},{values.b}
        </h1>
    </div>
  )
}
