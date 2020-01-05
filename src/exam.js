import React, {useState} from 'react';
import {Question} from './question';
import Style from './exam.module.css';

function Exam({data}) {
  const [index, setIndex] = useState(0);
  const qd = data[index];
  const goPrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const goNext = () => {
    if (index < (data.length - 1)) {
      setIndex(index + 1);
    }
  };
  return (
    <div className={Style.exam}>
      <img src="./hua.png" alt="hua"/>
      <Question data={qd} answer={qd.answer}/>
      <div>
        <button onClick={goPrevious} disabled={index <= 0}>前一题</button>
        <button onClick={goNext} disabled={index >= (data.length - 1)}>后一题</button>
      </div>
    </div>
  );
}

export default Exam;
