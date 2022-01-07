import React from 'react';
import { Card,Button } from '@mui/material';
import '../styles/components/_questionCard.scss'
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const NUMBERQUESTION = 10;

QuestionCard.protoTypes = {
  isStarted: PropTypes.bool
}

function QuestionCard({currentQuestion, question, inputText}){
  let isStarted;
  if (currentQuestion > 0) isStarted = true;
  return isStarted ?(
      <Card className='questionCard'>
        <h2>Question 1/10: <br /> <span>{question}</span></h2>

        <TextField
          className='input'
          id="outlined-number"
          label="Réponse"
          type="number"
          placeholder= {inputText}
          InputLabelProps={{
            shrink: true,
          }}
        /> 
        <div className='button'>
        <Button variant="contained">Next</Button>
        </div>
      </Card>   
  ) : (
    <Card className='questionCard'>
<Button variant="contained">Start</Button>      
    </Card>   
  );
}


export default QuestionCard;