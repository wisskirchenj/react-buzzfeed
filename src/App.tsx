import { useEffect, useState } from 'react';
import QuestionTile from './components/QuestionTile';
import Title from './components/Title';
import { Quiz } from './types/quiz';

function App() {

  const [quiz, setQuiz] = useState<Quiz>({} as Quiz);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/quiz");
      const json = await response.json();
      setQuiz(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <Title title={quiz?.title} subtitle={quiz?.subtitle} />
      {quiz?.content?.map(question => (
        <QuestionTile question={question} key={question.id} />
      ))}
    </div>
  );
}

export default App;
