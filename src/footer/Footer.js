import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Wrapper>
            <h4>soy el footer</h4>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    *{
        margin:0;
        padding:0;
    }
    background:#3f51b5;
    height:40px;
    display:flex;
    justify-content:space-evenly;
`;

export default Footer
