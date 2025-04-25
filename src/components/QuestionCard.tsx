import React from "react";
import he from "he"; 
import { PropsQuestionCard } from "../types";
import { shuffle } from "../utils/shuffle";
import Button from "./Button";

const QuestionCard: React.FC<PropsQuestionCard> = ({ question, onAnswer }) => {
  const answers = React.useMemo(() => {
    const allAnswers = [...question.incorrect_answers, question.correct_answer];
    return shuffle(allAnswers);
  }, [question]);

  return (
    <div className="bg-white rounded shadow-md p-6 max-w-xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">{he.decode(question.question)}</h2>
      <div className="grid gap-3">
        {answers.map((ans, idx) => (
          <Button
            key={idx}
            onClick={() => onAnswer(ans)}
            variant="primary"
            className="w-full"
          >
            {he.decode(ans)}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
