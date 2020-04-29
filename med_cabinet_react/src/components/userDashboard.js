import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import Form from '../styles/forms'
import FormWrapper from '../styles/formwrapper'
import Header from '../styles/headers'
import WeedCard from "./recCard"

function UserInfo({ props }) {
    let match = useRouteMatch('/dashboard')

    const focusHandler = event => {
        event.target.style.boxShadow = '5px 5px 5px grey'
    }
    const focusOutHandler = event => {
        event.target.style.boxShadow = 'none'
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
            <h3>Here are your reccomendations!</h3>
            <WeedCard />

            <Form>

                <br />
                <br />


            </Form>
        </div>
    )
}
export default UserInfo