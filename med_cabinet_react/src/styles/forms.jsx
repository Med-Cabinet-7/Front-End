import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
display: flex;
flex-direction: column;
width: 50%;
align-items: center;

input{
    margin: 2%;
}

button{
    margin: 20px;
    padding: 10px 15px;
    background-color: #008B8B;
    border: 2px solid #003333;
    color: white;

    &:hover{
        background-color: white;
        border-color: #008B8B;
        color: #008B8B;
    }

}
`
export default Form