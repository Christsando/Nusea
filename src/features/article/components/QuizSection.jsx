import QuizResults from "./QuizResults";
import ActiveQuiz from "./ActiveQuiz";
import { useState } from "react";

function QuizSection({quiz}) {
    const [selectAnswer, setSelectAnswer] = useState(null);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    const [score, setScore] = useState(0);
    
    function handleAnswer(optionId) {
        setSelectAnswer(optionId);
    }

    function handleNextQuestion() {
        const updateAnswer = [...userAnswers, selectAnswer];
        setUserAnswers(updateAnswer);

        if (selectAnswer === quiz[questionIndex].correct) {
            setScore(score + 1);
        }
        setSelectAnswer(null);
        if (questionIndex < quiz.length - 1) {
            setQuestionIndex(questionIndex + 1);
            setSelectAnswer(null);
        } else {
            setIsQuizFinished(true);
        }
    }

    const handleResetQuiz = () => {
        setQuestionIndex(0);
        setSelectAnswer(null);
        setUserAnswers([]);
        setIsQuizFinished(false);
        setScore(0);
    };

    return (
        <>
            {isQuizFinished ? (
                <QuizResults score={score} totalQuestions={quiz.length} userAnswers={userAnswers} onReset={handleResetQuiz} questions={quiz} />
            ) : (
                <ActiveQuiz question={quiz[questionIndex]} selectAnswer={selectAnswer} onAnswerSelect={handleAnswer} onNext={handleNextQuestion} isLastQuestion={questionIndex === quiz.length - 1} />
            )}
        </>
    );
}

export default QuizSection