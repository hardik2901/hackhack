// Quiz Component
const Quiz = ({
    showQuiz,
    question,
    quizs,
    checkAnswer,
    selectedAnswer,
    questionIndex,
    nextQuestion,
    showTheResult,
    checkAnswer1,
    saveAnswer
}) => {
    const renderOptionsOrInput = () => {
        if (question.input == 0) {
            return (
                <input
                    type="text"
                    className="form-control mt-3"
                    value={saveAnswer}
                    onChange={(event) => checkAnswer1(event)}
                />
            );
        } else {
            return question?.options?.map((item, index) => (
                <button
                    key={index}
                    className={`option w-100 text-start btn text-white py-2 px-3 mt-3 rounded btn-dark ${selectedAnswer === item ? 'bg-primary' : ''}`}
                    onClick={(event) => checkAnswer(event, item)}
                >
                    {item}
                </button>
            ));
        }
    };

    return (
        <section className="bg-dark text-white" style={{ display: `${showQuiz ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <div className="card p-4" style={{ background: '#3d3d3d', borderColor: '#646464' }}>
                            <div className="d-flex justify-content-between gap-md-3">
                                <h5 className='mb-2 fs-normal lh-base'>{question?.question}</h5>
                                <h5 style={{ color: '#60d600', width: '100px', textAlign: 'right' }}>{quizs.indexOf(question) + 1} / {quizs?.length}</h5>
                            </div>
                            <div>
                                {renderOptionsOrInput()}
                            </div>
                            {
                                (questionIndex + 1) !== quizs.length ? (
                                    <button style={{ color: 'white' }} className={`next-button btn py-2 w-100 mt-3 fw-bold ${selectedAnswer || saveAnswer ? 'bg-success' : ''}`} onClick={nextQuestion} disabled={!selectedAnswer && !saveAnswer}>Next Question</button>
                                ) : (
                                    <button style={{ color: 'white' }} className={`next-button btn py-2 w-100 mt-3 fw-bold ${selectedAnswer || saveAnswer ? 'bg-success' : ''}`} onClick={showTheResult} disabled={!selectedAnswer && !saveAnswer}>Show Advise</button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quiz;
