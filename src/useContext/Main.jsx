import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2';

export const a=React.createContext("")
export default function Main() {
    let val=90;
  return (
    <div>
        <a.Provider value={val}>
            <Child1 />
            <Child2 />
        </a.Provider>
    </div>
  )
}
