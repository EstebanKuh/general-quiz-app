import { Question } from "../types";

export const fetchQuestions = async (amount = 10): Promise<Question[]> => {
  const res = await fetch(`https://opentdb.com/api.php?amount=${amount}&type=multiple`);
  const data = await res.json();
  return data.results;
};
