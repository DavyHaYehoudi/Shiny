import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/navlink.css';
import styled from 'styled-components';
import logoShiny from '../assets/dark-logo.png';

const NavigationNav = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`

const Navigation = () => {
    return (
        <NavigationNav>
        <div>
            <Link to='/'><img src={logoShiny} alt='logoShiny' /></Link>
        </div>
        <ul className='navigation'>
            <li><NavLink to='/'  className={navData => navData.isActive ? 'nav-active' : ''}>ACCUEIL</NavLink></li>
            <li><NavLink to='/freelances' className={navData => navData.isActive ? 'nav-active' : ''}>PROFILS</NavLink></li>
            <li><NavLink to='/survey/1' className={navData => navData.isActive ? 'nav-active' : ''}>FAIRE LE TEST</NavLink></li>
        </ul>
        </NavigationNav>
    );
};

export default Navigation;