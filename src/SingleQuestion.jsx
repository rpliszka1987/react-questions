import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h5>{title} name</h5>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};
export default SingleQuestion;
