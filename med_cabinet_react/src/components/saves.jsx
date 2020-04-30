import React, { useEffect, useState } from 'react'

function SavedStrains (saves){
    const list=Object.values(saves)
    console.log(list)

    return(
        <div className='saves-wrapper'>
            {list.map(li =>{
                return(<h3>{li.Strain}</h3>)
            })}
        </div>
    )
}

export default SavedStrains
