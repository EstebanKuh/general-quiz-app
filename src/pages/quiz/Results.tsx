import { useNavigate } from "react-router-dom";
import he from "he";
import { motion } from "framer-motion";
import { useQuizStore } from "../../hooks/useQuizStore";
import Button from "../../components/Button";
import "../../styles/pages/Results.css"

const Results = () => {
  const { answers, resetQuiz } = useQuizStore();
  const navigate = useNavigate();

  const score = answers.filter((a) => a.isCorrect).length;
  const totalQuestions = answers.length;

  const handleRestart = () => {
    resetQuiz();
    navigate("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="results-container"
    >
      <div className="results-header">
        <h1 className="results-title">🎉 Resultado Final</h1>
        <p className="results-summary">Obtuviste <span className="score">{score}</span> de {totalQuestions} respuestas correctas.</p>
      </div>

      <ul className="results-list">
        {answers.map((ans, idx) => (
          <li key={idx} className={`result-item ${ans.isCorrect ? "correct" : "incorrect"}`}>
            <div className="question">
              <strong>{he.decode(ans.question)}</strong>
            </div>
            <div className="answer">
              <p><strong>Tu respuesta:</strong> {he.decode(ans.selected)}</p>
              <p><strong>Respuesta correcta:</strong> {he.decode(ans.correct)}</p>
            </div>
          </li>
        ))}
      </ul>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button onClick={handleRestart} variant="secondary">
          Volver a jugar
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Results;
