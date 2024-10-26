import { useState } from 'react';
import questionsData from './data';
import Questions from './Questions';

const App = () => {
  const [questions, setQuestions] = useState(questionsData);

  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
};
export default App;
