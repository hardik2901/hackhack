import React from 'react';

const Start = ({ startQuiz1, startQuiz2, startQuiz3, startQuiz4, showStart }) => {
    return (
        <section className='text-white text-center bg-dark' style={{ display: `${showStart ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <h1 className='fw-bold mb-4'>Get an advice</h1>
                    </div>
                    <div className="col-lg-6" >
                        <button style={{ width: "100%" }} onClick={startQuiz1} className="btn bg-light text-dark fw-bold mb-2">Start Quiz 1</button>
                        <button style={{ width: "100%" }} onClick={startQuiz2} className="btn bg-light text-dark fw-bold mb-2">Start Quiz 2</button>
                        <button style={{ width: "100%" }} onClick={startQuiz3} className="btn bg-light text-dark fw-bold mb-2">Start Quiz 3</button>
                        <button style={{ width: "100%" }} onClick={startQuiz4} className="btn bg-light text-dark fw-bold mb-2">Start Quiz 4</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Start;