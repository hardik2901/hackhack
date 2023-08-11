import React from 'react';

const Result = ({ showResult, quizs, marks, startOver, questionAnswer }) => {

    return (
        <section className="bg-dark text-white" style={{ display: `${showResult ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className={`text-light text-center p-5 rounded ${marks > (quizs.length * 5 / 2) ? 'bg-success' : 'bg-danger'}`}>
                            <ul className="list-unstyled">
                                {questionAnswer.map((entry, index) => (
                                    <li key={index}>
                                        <strong>Question {index + 1}:</strong> {quizs.find(q => q.id === entry.questionId)?.question}<br />
                                        <strong>Your Answer:</strong> {entry.answer}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Result;