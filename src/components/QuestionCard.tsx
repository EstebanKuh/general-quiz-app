import React from "react";
import he from "he";
import { motion } from "framer-motion";
import Button from "./Button";
import { PropsQuestionCard } from "../types";
import { shuffle } from "../utils/shuffle";
import "../styles/components/QuestionCard.css";

const QuestionCard: React.FC<PropsQuestionCard> = ({ question, onAnswer }) => {
  const answers = React.useMemo(() => {
    const allAnswers = [...question.incorrect_answers, question.correct_answer];
    return shuffle(allAnswers);
  }, [question]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="question-card"
    >
        <h2 className="question">{he.decode(question.question)}</h2>
        <div className="options">
          {answers.map((ans, idx) => (
            <Button
              key={idx}
              onClick={() => onAnswer(ans)}
              variant="primary"
              className="option-button"
            >
              {he.decode(ans)}
            </Button>
          ))}
        </div>
    </motion.div>
  );
};

export default QuestionCard;
