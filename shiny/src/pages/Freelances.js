import React, { useEffect } from 'react';
import Card from '../composants/Card';
// import DefaultPicture from '../assets/profile.png';
import styled from 'styled-components';
import colors from '../styles/colors';
import { useState } from 'react/cjs/react.development';
import axios from 'axios';
import { Loader } from '../composants/Loader';

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

const Freelances = () => {

    const [profils, setProfils] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        axios
            .get('http://localhost:8000/freelances')
            .then(res => {
                setProfils(res.data.freelancersList)
                setIsLoading(false);
            })
    },[])
   
    return (
        <div>
            <PageTitle>Trouvez votre prestataire</PageTitle>
            <PageSubtitle>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </PageSubtitle>
            
            {isLoading ?
                <Loader />
            :
            <CardsContainer>
                
                {profils.map((profil,index) =>
                    <Card
                        key={index}
                        label={profil.name}
                        title={profil.job}
                        picture={profil.picture}
                    />)
                }
                
            </CardsContainer>
            }
        </div>
    );
};

export default Freelances;