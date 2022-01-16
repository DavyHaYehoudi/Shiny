import React,{useContext, useEffect} from 'react';
import {SurveyContext} from '../styles/context';

const Results = () => {

    const{answers} = useContext(SurveyContext);
   
    console.log('voici les réponses :',answers);

    return (
        <div>
            <h1>Résultats</h1>
        </div>
    );
};

export default Results;