import React, { useEffect, useState } from 'react'

export default function SavedStrains (saves){
    const list=Object.values(saves)
    console.log(list)


        return(
            <div className='saves-wrapper'>
                <ul>
                {list.map(li =>{
                    return(<h3>{li.Strain}</h3>)
                })}
                </ul>
            </div>
        )
    }



