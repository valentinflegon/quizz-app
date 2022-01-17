import React from 'react';
import { 
  Card, 
  TextField 
  } from '@mui/material';
  
function QuestionCard({ currentQuestion, question, inputText, citie1, citie2 }) {
  return (
    <Card className='questionCard'>
      <h2>Question {currentQuestion}/10: <br /> <span>{question} {citie1} et {citie2} ?</span></h2>
      <TextField
        className='inputField'
        id="outlined-number"
        label="Réponse"
        type="number"
        placeholder={inputText}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Card>);
}

export default QuestionCard;