import React from 'react'
import Question from './Question';
import Answerlist from './Answerlist';
import UserGreetings from './UserGreetings';
function QuizArea(props) {
    if(props.isFinished){
        return <UserGreetings />
    }
    return (
        <div>
            <h2>Quiz Area</h2>
            <Question dataSet={props.dataSet} />
            <Answerlist handleClick={props.handleClick} dataSet={props.dataSet} />
        </div>
    )
}

export default QuizArea;
