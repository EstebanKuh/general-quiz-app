import { useNavigate } from "react-router-dom";
import he from "he";
import { useQuizStore } from "../../hooks/useQuizStore";
import Button from "../../components/Button";


const Results = () => {
  const { answers, resetQuiz } = useQuizStore();
  const navigate = useNavigate();

  const score = answers.filter((a) => a.isCorrect).length;

  const handleRestart = () => {
    resetQuiz();
    navigate("/");
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">🎉 Resultado Final</h1>
      <p className="mb-4 text-lg">Obtuviste {score} de {answers.length} respuestas correctas.</p>

      <ul className="mb-6 space-y-2">
        {answers.map((ans, idx) => (
          <li key={idx} className={`p-2 border rounded ${ans.isCorrect ? "bg-green-100" : "bg-red-100"}`}>
            <strong>{he.decode(ans.question)}</strong><br />
            Tu respuesta: {he.decode(ans.selected)} <br />
            Correcta: {he.decode(ans.correct)}
          </li>
        ))}
      </ul>

      {/* <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleRestart}>
        Volver a jugar
      </button> */}
      <Button onClick={handleRestart} variant="secondary">Volver a jugar</Button>
    </div>
  );
};

export default Results;
