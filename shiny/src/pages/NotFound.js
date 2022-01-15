import React from 'react';
import img404 from '../assets/404.svg'
import styled from 'styled-components';

const NotFoundBkg = styled.div`
    text-align: center;
    margin-top:100px;
    padding:50px;
    background:#F9F9FC;
    height: 800px
`
const NotFound = () => {
    return (
        <NotFoundBkg>
            <h3>Il semblerait qu'il y ait un problème</h3>
            <img src={img404} alt='erreur' />
            <h3>Cette page n'existe pas❌</h3>
        </NotFoundBkg>
    );
};

export default NotFound;