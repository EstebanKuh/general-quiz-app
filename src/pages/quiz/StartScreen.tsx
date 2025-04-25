import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import Select from "../../components/Select";
import "../../styles/pages/StartScreen.css";
import { useQuizStore } from "../../hooks/useQuizStore";
import { APICategory, QuizzDifficult } from "../../types";
import { API_DIFFICULT } from "../../utils/apiConstants";
import { fetchCategories, fetchQuestions } from "../../services/apiTrivia";

export default function StartScreen() {
  const setQuestions = useQuizStore((state) => state.setQuestions);
  const navigate = useNavigate();
  const [listCategory, setListCategory] = useState<Array<APICategory>>([]);
  const [category, setCategory] = useState<string>("9");
  const [difficulty, setDifficulty] = useState<QuizzDifficult>("easy");

  const startQuiz = async () => {
    const questions = await fetchQuestions();
    setQuestions(questions);
    navigate("/quiz");
  };

  const getCategories = async () => {
    const categories = await fetchCategories();
    setListCategory(categories.trivia_categories);
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="start-screen"
    >
      <h1>🧠 Quiz de Cultura General</h1>

      <div className="form-group">
        <label htmlFor="select-category">Categoría</label>
        <Select
          id="select-category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          items={listCategory}
        />
      </div>

      <div className="form-group">
        <label htmlFor="select-difficulty">Dificultad</label>
        <Select
          id="select-difficulty"
          value={difficulty}
          items={API_DIFFICULT}
          onChange={(e) => setDifficulty(e.target.value as QuizzDifficult)}
        />
      </div>

      <Button variant="primary" onClick={startQuiz}>
        Comenzar
      </Button>
    </motion.div>
  );
}
