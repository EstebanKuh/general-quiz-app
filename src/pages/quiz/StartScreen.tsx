import { useNavigate } from "react-router-dom";
import { fetchQuestions } from "../../services/apiTrivia";
import { useQuizStore } from "../../hooks/useQuizStore";
import Button from "../../components/Button";

export default function StartScreen() {
  const setQuestions = useQuizStore((state) => state.setQuestions);
  const navigate = useNavigate();

  const startQuiz = async () => {
    const questions = await fetchQuestions();
    setQuestions(questions);
    navigate("/quiz");
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">🧠 Quiz de Cultura General</h1>
      {/* <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={startQuiz}>
        Comenzar
      </button> */}
      <Button onClick={startQuiz}>Comenzar</Button>
    </div>
  );
}
