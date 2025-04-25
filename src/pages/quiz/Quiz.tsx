import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import QuestionCard from "../../components/QuestionCard";
import Loader from "../../components/Loader";
import { useQuizStore } from "../../hooks/useQuizStore";
import { Answer } from "../../types";
import "../../styles/pages/Quiz.css"

const Quiz = () => {
  const { questions, currentIndex, answerQuestion } = useQuizStore();
  const navigate = useNavigate();
  const current = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleAnswer = (selected: string) => {
    const newAnswer: Answer = {
      question: current.question,
      selected,
      correct: current.correct_answer,
      isCorrect: selected === current.correct_answer,
    };

    answerQuestion(newAnswer);

    const nextQuestion = currentIndex + 1;
    if (nextQuestion >= questions.length) {
      navigate("/results");
    }
  };

  if (!current) return <Loader />;

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h3>Pregunta {currentIndex + 1} de {questions.length}</h3>
        <div className="progress-bar">
          <motion.div
            className="progress-bar-fill"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          />
        </div>
      </div>

      <QuestionCard question={current} onAnswer={handleAnswer} />
    </div>
  );
};

export default Quiz;
