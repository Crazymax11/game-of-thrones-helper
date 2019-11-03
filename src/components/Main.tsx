import Submain from './Submain';
import React from 'react';
import styled from 'styled-components'

const Hello = styled.div`
    border-radius: 10px;
    background-color: black;
`


export default () => <div>
    <h1> TITLE </h1>
    <Hello>  HELLO </Hello>
    <Submain text={"123"}/>
</div>

