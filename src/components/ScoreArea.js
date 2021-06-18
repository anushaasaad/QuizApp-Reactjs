import React from 'react'
import TotalCorrect from './totalcorrectones';
import TotalinCorrect from './totalincorrectones';
function ScoreArea(props) {

    return (
        <div className="scorewrapper">
            <TotalCorrect correct={props.correct}/>
            <TotalinCorrect incorrect={props.incorrect}/>
        </div>
    )
}

export default ScoreArea;
