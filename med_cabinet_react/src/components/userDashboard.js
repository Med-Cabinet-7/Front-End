import React, { useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { getStrains } from "../utils/getStrains";
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
    const onHighTypeSubmit = async event => {
        event.preventDefault();
        const returnedStrains = await getStrains(userInfo.hightype);
        setStrains(returnedStrains);
    }

    //https://cannapi.herokuapp.com/predict  (in the .get)
    //id of input field user_input ... (Need to be sent to the backend as an array) the top 5 strains will be return ... maybe use an .await

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

            <h3>Here are your reccomendations!</h3>
            {/* <WeedCards strains={strains} /> */}
            <ul>
                {/* dont need the  --   .slice(0, 5) */}
                {strains.map((strain) => {
                    return <li><WeedCard strain={strain} /></li>;
                })}
            </ul>
            {/* <WeedCard /> */}
        </div>
    )
}
export default UserInfo
