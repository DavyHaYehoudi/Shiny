import React from 'react';
import Card from '../composants/Card';
import DefaultPicture from '../assets/profile.png';
import styled from 'styled-components';
import colors from '../styles/colors';

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


const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Développeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
    {
        name: 'Henri Labuche',
        jobTitle: 'Développeur Fullstack',
        picture: DefaultPicture,
    },
]

const Freelances = () => {
   
    return (
        <div>
            <PageTitle>Trouvez votre prestataire</PageTitle>
            <PageSubtitle>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </PageSubtitle>
            <CardsContainer>
                {freelanceProfiles.map((profil,index) =>
                    <Card
                        key={index}
                        label={profil.name}
                        title={profil.jobTitle}
                        picture={profil.picture}
                    />)
                }
            </CardsContainer>
        </div>
    );
};

export default Freelances;