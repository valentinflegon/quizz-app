import React from 'react';
import { NavLink } from 'react-router-dom';
import QuestionCard from '../../components/QuestionCard';

const NUMBERQUESTION = 10;

const DistCities = () => {
    const currentQuestion = 1;
  return (
    <>
    <h1>Quizz Distance Villes</h1>
     
     <QuestionCard currentQuestion={currentQuestion} question={'Quelle est la distance entre Marseille et Bordeaux ?'} inputText={'Distance en KM'} /> 

    </>
  );
};

export default DistCities;