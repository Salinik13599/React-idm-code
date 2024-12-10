import React, { useMemo, useState } from 'react'

export default function Memo() {
    let [num,setNum]=useState(0)

    let val=useMemo(
        ()=>{
            return num*987646235238727;
        },[num]
    )
  return (
    <div>
        <h1>
            count val {num}
            <br />
            memo val {val}
        </h1>
        <button onClick={()=>setNum(num+1)}>
            Click
        </button>
    </div>
  )
}
