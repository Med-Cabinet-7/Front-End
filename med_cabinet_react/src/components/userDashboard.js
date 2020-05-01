import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
// import { getStrains } from "../utils/getStrains";
import { axiosWithAuth } from "../utils/axiosWithAuth"
import axios from "axios";
import Form from '../styles/forms'
import FormWrapper from '../styles/formwrapper'
import Header from '../styles/headers'
import WeedCard from "./recCard"
import { StrainList, initialStrainList } from "./dummyDataUpdateDelete";
import SavedStrains from "./saves"

function UserInfo({ props }) {
    const [userInfo, setUserInfo] = useState({
        hightype: "",
    })
    const [saves, setSaves] = useState([...initialStrainList]);

    useEffect(()=>{
      axiosWithAuth().get("/weed/6")
      .then(res=>{
          console.log(res)
          setSaves([...saves, res.data])
      })
      .catch(err=>{
          console.log('There was an error with your favorites list')
      })
    },[])

    const [strains, setStrains] = useState([]);

    const focusHandler = event => {
        event.target.style.boxShadow = '5px 5px 5px grey'
    }
    const focusOutHandler = event => {
        event.target.style.boxShadow = 'none'
    }

    const handleUserInfoChange = event => setUserInfo({ ...userInfo, [event.target.name]: event.target.value });

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

    const onStrainSave =  async (strain) => {
        setSaves([...saves, strain]);
    }

    const removeSave =  async (strain) => {
        setSaves(saves.filter((save) => save.id !== strain.id));
    }

    //https://cannapi.herokuapp.com/predict  (in the .get)
    //id of input field user_input ... (Need to be sent to the backend as an array) the top 5 strains will be return ... maybe use an .await

    return (
        <div>
            <Header>
                <div className='header-wrapper'>
                    <h1>Open Your Medicine Cabinet</h1>
                    {/* <img
                        className="logo"
                        src="../img/android-chrome-192x192.png"
                        // ADD THE LOGO HERE
                        alt="logo image"
                    /> */}
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
            {/* <SavedStrains saves={saves} removeStrain={removeStrain}/> */}
            <ul>
                {saves && saves.map((save) => {
                    console.log(save);
                    return (<li>
                        <div>{save.Strain}</div>
                        <button onClick={() => removeSave(save)}>Remove me</button>
                    </li>);
                })}
            </ul>

            {/* <StrainList /> */}

            <h3>Here are your reccomendations!</h3>
            {/* <WeedCards strains={strains} /> */}
            <ul>
                {strains && strains.map((strain) => {
                    console.log(strain);
                    return <li><WeedCard strain={strain}  saveStrain={onStrainSave}/></li>;
                })}
            </ul>
        </div>
    )
}
export default UserInfo
