import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

export default function View() {
    let api="http://localhost:2000";
    let [data,setData]=useState([])
    useEffect(
        ()=>{
            axios.get(api).then((e)=>{
                // console.log(e.data.msg)
                setData(e.data.msg)
            }).catch((err)=>{
                console.log(err)
            })
        },[api,data]
    )

    function remove(id){
        console.log(`${api}/${id}`)
        axios.delete(`${api}/${id}`).then(()=>{
            alert("Data deleted\
                ")
            axios.get(api).then((s)=>{
                setData(s.data)
            })
        }) 
    }
  return (
    <div>
        <dl>
            {
                data.map(
                    (item)=>(
                        <dt>
                            {item.name}
                            <dd>
                                {item.age}
                            </dd>
                            <button onClick={()=>remove(item._id)}>Remove data</button>
                        </dt>
                    )   
                )
            }
        </dl>
    </div>
  )
}
