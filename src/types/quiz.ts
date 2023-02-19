import { Answer } from "./answer";
import { Question } from "./question";

export type Quiz = {
  quizId: number;
  title: string;
  subtitle: string;
  content: Question[];
  answers: Answer[];
};