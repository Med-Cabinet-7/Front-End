import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
// import { getStrains } from "../utils/getStrains";
import { axiosWithAuth } from "../utils/axiosWithAuth"
import axios from "axios";
import Form from '../styles/forms'
import FormWrapper from '../styles/formwrapper'
import Header from '../styles/headers'
import WeedCard from "./recCard"
import SavedStrains from "./saves"

function UserInfo({ props }) {
    const [userInfo, setUserInfo] = useState({
        hightype: "",
    })
    const [saves, setSaves] = useState([])

    // useEffect(()=>{
    //   axiosWithAuth().get("/weed/6")
    //   .then(res=>{
    //       console.log(res)
    //       setSaves([...saves, res.data])
    //   })
    //   .catch(err=>{
    //       console.log('There was an error with your favorites list')
    //   })
    // },[])

    const [strains, setStrains] = useState([]);

    // let match = useRouteMatch('/dashboard')

    const focusHandler = event => {
        event.target.style.boxShadow = '5px 5px 5px grey'
    }
    const focusOutHandler = event => {
        event.target.style.boxShadow = 'none'
    }

    const handleUserInfoChange = event => setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    // const handleUserInfoChange = event => setUserInfo({ ...userInfo, [event.target.name]: [...event.target.value] });
    const onHighTypeSubmit = async event => {
        event.preventDefault();
        console.log(userInfo.hightype.split(" "));
        // const returnedStrains = await getStrains(userInfo.hightype.split(" "));
        axios
        .post("https://testingtheweed.herokuapp.com/api/weed/high", { search: userInfo.hightype.split(" ") })
        .then(res => {
            setStrains(res.data);
            console.log(res.data);
        })

        console.log(strains)
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
            <h3>Here's your favorites!</h3>
            <SavedStrains saves={saves}/>

            <h3>Here are your reccomendations!</h3>
            {/* <WeedCards strains={strains} /> */}
            <ul>
                {/* dont need the  --   .slice(0, 5) */}
                {strains && strains.map((strain) => {
                    console.log(strain);
                    return <li><WeedCard strain={strain} /></li>;
                })}
            </ul>
            {/* <WeedCard /> */}
        </div>
    )
}
export default UserInfo
