import React from 'react';
import logoHome from '../assets/home.svg';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import colors from '../styles/colors'


const HomePresentation = styled.div`
    margin:100px auto;
    padding:250px;
    background-color: ${colors.backgroundLight};
    height: 800px;
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
    max-width:1200px;
`

const HomeTitle = styled.h1`
`

const Home = () => {

    const navigate = useNavigate();
    const goToTheTest = () =>{
        navigate('/survey/1')
}

    return (
        <HomePresentation>
            <div>
                <HomeTitle>Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents</HomeTitle>
                <button onClick={goToTheTest}>Faire le test</button>
            </div>
            <img src={logoHome} alt='home-logo' />
        </HomePresentation>
    );
};

export default Home;