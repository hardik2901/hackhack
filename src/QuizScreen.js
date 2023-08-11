import React, { useEffect, useState } from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';
import Result from './components/Result';

function Quizscreen() {
    // All Quizs, Current Question, Index of Current Question, Answer, Selected Answer, Total Marks
    const [quizs, setQuizs] = useState([]);
    const [question, setQuesion] = useState({});
    const [questionIndex, setQuestionIndex] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [marks, setMarks] = useState(0);
    const [quizHeading, setQuizHeading] = useState('');

    const [questionAnswer, setQuestionAnswer] = useState([]);

    // Display Controlling States
    const [showStart, setShowStart] = useState(true);
    const [showQuiz, setShowQuiz] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [questionSet, setQuestionSet] = useState('');

    const [saveQuestion, setSaveQuestion] = useState('');
    const [saveAnswer, setSaveAnswer] = useState('');

    // Load JSON Data
    useEffect(() => {
        fetch(questionSet)
            .then(res => res.json())
            .then(data => setQuizs(data))
        console.log(questionAnswer)
    }, [questionAnswer, questionSet]);

    // Set a Single Question
    useEffect(() => {
        if (quizs.length > questionIndex) {
            setQuesion(quizs[questionIndex]);
        }
    }, [quizs, questionIndex])

    // Start Quiz
    const startQuiz1 = () => {
        setQuestionSet('quiz1.json');
        setShowStart(false);
        setShowQuiz(true);
        setQuizHeading('Retirement Planning');

    }

    const startQuiz2 = () => {
        setShowStart(false);
        setShowQuiz(true);
        setQuestionSet('quiz2.json');
        setQuizHeading('Childs Marriage');
    }

    const startQuiz3 = () => {
        setShowStart(false);
        setShowQuiz(true);
        setQuestionSet('quiz3.json');
        setQuizHeading('House Buying');
    }

    const startQuiz4 = () => {
        setShowStart(false);
        setShowQuiz(true);
        setQuestionSet('quiz4.json');
        setQuizHeading('Children Higher Education');
    }




    const checkAnswer = (event, selected) => {
        if (!selectedAnswer) {
            let questionAnswerTemp = questionAnswer;
            questionAnswerTemp.push({
                questionId: question.id,
                answer: selected,
            });
            setCorrectAnswer(question.answer);
            setSelectedAnswer(selected);
            if (selected) {
                setSelectedAnswer('true');
            }
            setQuestionAnswer(questionAnswerTemp);

            event.target.classList.add('bg-primary');

            // Add the following lines to add a class to the next button
            const nextButton = document.querySelector('.next-button');
            nextButton?.classList.add('bg-primary');
        }
    };

    const checkAnswer1 = (event) => {

        const inputValue = event.target.value;

        setSaveQuestion(question.question);
        setSaveAnswer(inputValue);

        const nextButton = document.querySelector('.next-button');
        nextButton?.classList.add('bg-primary');
    };


    // Next Quesion
    const nextQuestion = () => {
        setCorrectAnswer('');
        setSelectedAnswer('');

        let questionAnswerTemp = questionAnswer;
        questionAnswerTemp.push({
            question: saveQuestion,
            answer: saveAnswer
        })

        setQuestionAnswer(questionAnswerTemp)

        setSaveAnswer('');
        setSaveQuestion('');

        const wrongBtn = document.querySelector('button.bg-primary');
        wrongBtn?.classList.remove('bg-primary');
        const rightBtn = document.querySelector('button.bg-primary');
        rightBtn?.classList.remove('bg-primary');
        setQuestionIndex(questionIndex + 1);
    }

    // Show Result
    const showTheResult = () => {
        setShowResult(true);
        setShowStart(false);
        setShowQuiz(false);
    }

    // Start Over
    const startOver = () => {
        setShowStart(false);
        setShowResult(false);
        setShowQuiz(true);
        setCorrectAnswer('');
        setSelectedAnswer('');
        setQuestionIndex(0);
        setMarks(0);
        const wrongBtn = document.querySelector('button.bg-primary');
        wrongBtn?.classList.remove('bg-primary');
        const rightBtn = document.querySelector('button.bg-primary');
        rightBtn?.classList.remove('bg-primary');
    }


    return (
        <>
            {/* Welcome Page */}
            <Start
                startQuiz1={startQuiz1}
                startQuiz2={startQuiz2}
                startQuiz3={startQuiz3}
                startQuiz4={startQuiz4}
                showStart={showStart}
            />

            {/* Quiz Page */}
            <Quiz
                showQuiz={showQuiz}
                question={question}
                quizs={quizs}
                checkAnswer={checkAnswer}
                checkAnswer1={checkAnswer1}
                correctAnswer={correctAnswer}
                selectedAnswer={selectedAnswer}
                questionIndex={questionIndex}
                nextQuestion={nextQuestion}
                showTheResult={showTheResult}
                saveAnswer={saveAnswer}
                questionAnswer={questionAnswer}
            />

            {/* Result Page */}
            <Result
                quizHeading={quizHeading}
                showResult={showResult}
                quizs={quizs}
                marks={marks}
                questionAnswer={questionAnswer}
                startOver={startOver} />
        </>
    );
}

export default Quizscreen;