import React,{useEffect, useState} from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import { Loader } from '../composants/Loader';
import styled from 'styled-components';
import colors from '../styles/colors';


const SurveyConteneur = styled.div`
    text-align:center;
`
const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
`

const Survey = () => {

    const [surveyData, setSurveyData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() =>{
        setIsLoading(true);
        axios
            .get('http://localhost:8000/survey')
            .then(res =>{
                setSurveyData(res.data.surveyData)
                setIsLoading(false)

    })},[])

    const {questionNumber} = useParams();
    //convertir en type Number soit par parseInt soit par Number
    const questionNumberInt = parseInt(questionNumber);
    const navigate = useNavigate();

    const handlePageBack =()=>{
        if(questionNumberInt>1){
           navigate(`/survey/${questionNumberInt-1}`)
        }
    }

    const handlePageNext =() => {
        if(!(questionNumberInt===10)){
            navigate(`/survey/${questionNumberInt+1}`)
        }
    }

    const handleResults = () => {
        navigate('/results')
    }


    return (
        <SurveyConteneur>
            <QuestionTitle>Question : {questionNumber}</QuestionTitle>
            {isLoading ? 
            <Loader />
            :
            <QuestionContent>{surveyData[questionNumberInt]}</QuestionContent>
            }

            <div>
                <button onClick={handlePageBack}> Précédent</button>
                
                {questionNumberInt===10 ? 
                <button onClick={handleResults}>Résultats 🔹</button>
                :
                <button onClick={handlePageNext}>Suivant </button>
                }
            </div>
        </SurveyConteneur>
    );
};

export default Survey;