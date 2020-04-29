import React, { useState } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useRouteMatch } from 'react-router-dom'
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Axios from "axios";
import Form from '../styles/forms'
import FormWrapper from '../styles/formwrapper'
import Header from '../styles/headers'
import WeedCard from "./recCard"

function UserInfo({ props }) {
    const [userInfo, setUserInfo] = useState({
        hightype: '',
    })

    const [strains, setStrains] = useState([]);

    let match = useRouteMatch('/dashboard')

    const focusHandler = event => {
        event.target.style.boxShadow = '5px 5px 5px grey'
    }
    const focusOutHandler = event => {
        event.target.style.boxShadow = 'none'
    }

    const handleUserInfoChange = event => setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    const onHighTypeSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
            .post('/hightype', userInfo)
            .then(res => {
                console.log('High type response', res);
            })
            .catch(err => {
                console.error('High type error', err);
            })
    }

    return (
        <div>
            <Header>
                <div className='header-wrapper'>
                    <h1>Open Your Medicine Cabinet</h1>
                    <img
                        className="logo"
                        src="..."
                        // ADD THE LOGO HERE
                        alt="logo image"
                    />
                </div>
            </Header>
            <input
                label='High Type'
                className='hightype'
                type='text'
                placeholder='What type of high are you looking for?'
                name='hightype'
                onFocus={focusHandler}
                onBlur={focusOutHandler}
                onChange={handleUserInfoChange}
            />

            <button onClick={onHighTypeSubmit}>Get Strains</button>

            {/* <Form>
            <label>What kind of high are you looking for?</label>
            <div>
        <form onSubmit={handleSubmit}>
          <input
          lable="highType"
            type="text"
            name="text field"
            placeholder="What type of high are you looking for?"
            // value={.}
            // onChange={handleChange}
          />
          <input
      

        </Form> */}

            <h3>Here are your reccomendations!</h3>
            {/* <WeedCards strains={strains} /> */}
            <ul>
                {strains.slice(0, 5).map((strain) => {
                    return <li><WeedCard strain={strain} /></li>;
                })}
            </ul>
            {/* <WeedCard /> */}
        </div>
    )
}
export default UserInfo