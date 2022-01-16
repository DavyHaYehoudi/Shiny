import React,{useEffect, useState,useContext} from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import { Loader } from '../composants/Loader';
import styled from 'styled-components';
import colors from '../styles/colors';
import { SurveyContext } from '../styles/context';


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
const ReplyBox = styled.button`
  color:black;
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`

const ReplyWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Survey = () => {

    const [surveyData, setSurveyData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { answers, saveAnswers } = useContext(SurveyContext);

    const saveReply = (answer)=> {
        saveAnswers({ [questionNumber]: answer })
      }

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
            <ReplyWrapper>
                <ReplyBox
                onClick={() => saveReply(true)}
                isSelected={answers[questionNumber] === true}
                >
                Oui
                </ReplyBox>
                <ReplyBox
                onClick={() => saveReply(false)}
                isSelected={answers[questionNumber] === false}
                >
                Non
                </ReplyBox>
            </ReplyWrapper>

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