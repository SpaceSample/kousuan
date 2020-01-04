import React, {useState} from 'react';
import './App.css';
import {Question, genQuestionData} from './question';

const STATUS = {
  INIT:1,
  PLAYING:2,
  END:3
}
function App() {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  // const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState(STATUS.INIT);
  const [questions] = useState(genAllQuestionData());

  function start() {
    setStartTime(new Date().getTime());
    setStatus( STATUS.PLAYING);
  }
  function genAllQuestionData(){
    const data = [];
    for (let i=0;i<20;i++){
      data.push(genQuestionData()); 
    }
    return data;
  }
  function end(){
    setEndTime(new Date().getTime());
    let score =0;
    questions.forEach(qd => {
      if(!qd.answer){
        return;
      }
      if (qd.right) {
        score ++;
      }
    });
    setScore(score);
    setStatus(STATUS.END);
  }

  return (
    <div className="App">
      <header className="App-header">
        {status === STATUS.INIT && (
          <button onClick={start}>开始</button>
        )}

        {status === STATUS.PLAYING && (
          questions.map((qd, index) => <Question data={qd} key={index} />)
        )}
        {status === STATUS.PLAYING && (
          <button onClick={end}>交卷</button>
        )}

        {status === STATUS.END && (
          <div>
            <div>用时<span>{(endTime-startTime)/1000}</span>秒</div>
            <div>得分<span>{score}</span></div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
