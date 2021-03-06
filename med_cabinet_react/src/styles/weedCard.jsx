import React from 'react'
import styled from 'styled-components'

const WeedCardStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: 5px solid #008B8B;
border-radius: 25px;
box-shadow: 5px 5px 5px grey;
padding: 1%;
margin: 3%;
width: 50%;
.descWrapper{
    width: 65%;
    display: inline-block;
    text-align: left;
    border-top: 2px solid grey;
}
`
export default WeedCardStyle