import React from 'react'

function UserInfo({props}){
    const {
        handleChange,
        handleSubmit
    } = props

    return(
        <form>
            <input
                className='userInfo'
                name='name'
                type='text'
                label='name'
                placeholder='name'
                onChange={handleChange}>
            </input>
            <br/>
            <input
                className='userInfo'
                name='height'
                type='text'
                label='height'
                placeholder='height'
                onChange={handleChange}>
            </input>
            <br/>
            <input
                className='userInfo'
                name='weight'
                type='text'
                label='weight'
                placeholder='weight'
                onChange={handleChange}>
            </input>
            <br/>
            <br/>
            <button className='submit' onClick={handleSubmit}>Submit</button>

        </form>
    )
}