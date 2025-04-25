import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartScreen from "./pages/quiz/StartScreen";
import Quiz from "./pages/quiz/Quiz";
import Results from "./pages/quiz/Results";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;