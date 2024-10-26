import { useState } from 'react';
import questionsText from './data';

const App = () => {
  const [questions, setQuestions] = useState(questionsText);

  return <h2>Hello</h2>;
};
export default App;
