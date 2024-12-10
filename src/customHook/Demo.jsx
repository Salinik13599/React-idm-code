    import React from 'react'
    import useCounter from './useCounter'

    export default function Demo() {
        let [a,b]=useCounter(0)
        console.log(a)
    return (
        <div>
            {a}
            <button onClick={b}>increment</button>
        </div>
    )
    }
