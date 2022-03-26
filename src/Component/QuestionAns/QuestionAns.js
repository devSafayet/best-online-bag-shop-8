import React from 'react';
import './QuestionAns.css';

const QuestionAns = () => {
    return (
        <div className='questionAns'>
            <h1> Question And Answer </h1>
            <div className='questionAns-1'>
                <h3>Question No-1: <span className='question'>How React Works?</span> </h3>
                <h4>Answer No-1: </h4>
            </div>
            <div className='questionAns-2'>
                <h3>Question No-2: <span className='question'>Props VS State!</span> </h3>
                <h4>Answer No-2: </h4>
            </div>

        </div>
    );
};

export default QuestionAns;