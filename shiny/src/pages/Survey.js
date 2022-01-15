import React from 'react';
import { useNavigate, useParams} from 'react-router-dom';

const Survey = () => {

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
        <div>
            <h1>SONDAGE</h1>
            <h2>Questionnaire</h2>
            <h3>Question : {questionNumber}</h3>

            <div className='handlePage'>
                <button onClick={handlePageBack}>↩️ Précédent</button>
                
                {questionNumberInt===10 ? 
                <button onClick={handleResults}>Résultats 🔹</button>
                :
                <button onClick={handlePageNext}>Suivant ↪️</button>
                }
            </div>
        </div>
    );
};

export default Survey;