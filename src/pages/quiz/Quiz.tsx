import { useNavigate } from "react-router-dom";
import { useQuizStore } from "../../hooks/useQuizStore";
import QuestionCard from "../../components/QuestionCard";
import { Answer } from "../../types";

const Quiz = () => {
  const { questions, currentIndex, answerQuestion } = useQuizStore();
  const navigate = useNavigate();
  const current = questions[currentIndex];

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

  if (!current) return <div className="p-4">Cargando pregunta...</div>;

  return (
    <div className="p-4">
      <h3 className="mb-2 text-sm text-gray-600">
        Pregunta {currentIndex + 1} de {questions.length}
      </h3>
      <QuestionCard question={current} onAnswer={handleAnswer} />
    </div>
  );
};

export default Quiz;
