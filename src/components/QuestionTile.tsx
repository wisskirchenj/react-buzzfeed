import { Question } from '../types/question';
import OptionTile from './OptionTile';

const QuestionTile = (prop: { question: Question }) => {
  console.log(prop.question);
  return (
    <>
      <h3 id={prop.question.id.toString()} className="question-title">
        {prop.question.text}
      </h3>
      <div className="options">
        {prop.question.options.map((option, i) => (
          <OptionTile option={option} key={i}/>
        ))}
      </div>
    </>
  );
};

export default QuestionTile;