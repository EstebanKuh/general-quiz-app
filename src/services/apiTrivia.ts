import { Question, APICategoryResponse } from "../types";

export const fetchQuestions = async (
  amount = 10,
  category = '9',
  difficult = 'easy',
  type = 'multiple'
): Promise<Question[]> => {
  const res = await fetch(`https://opentdb.com/api.php?amount=${amount}&type=${type}&category=${category}&difficulty=${difficult}`);
  const data = await res.json();
  return data.results;
};

export const fetchCategories = async(): Promise<APICategoryResponse> => {
  const res = await fetch(`https://opentdb.com/api_category.php`);
  const data = await res.json();
  return data;
};
