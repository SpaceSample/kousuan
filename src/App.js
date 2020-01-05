import React, {useState} from 'react';
import './App.css';
import {genQuestionData} from './question';
import Exam from './exam';

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
  const [questions, setQuestions] = useState([]);

  function start(type) {
    setQuestions(genAllQuestionData(type));
    setStartTime(new Date().getTime());
    setStatus( STATUS.PLAYING);
  }
  function genAllQuestionData(type){
    const data = [];
    for (let i=0;i<20;i++){
      data.push(genQuestionData(type)); 
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
      if (qd.isCorrect()) {
        score ++;
      }
    });
    setScore(score);
    setStatus(STATUS.END);
  }

  function restart(){
    setScore(0);
    setStatus(STATUS.INIT);
  }

  return (
    <div className="App">
      <header className="App-header">
        {status === STATUS.INIT && (
          <div>
            <button onClick={() => start('20+-')}>二十以内加减法</button>
            <button onClick={() => start('99*/')}>九九乘除法</button>
          </div>
        )}

        {status === STATUS.PLAYING && (
          <Exam data={questions} />
        )}
        {status === STATUS.PLAYING && (
          <button onClick={end}>交卷</button>
        )}

        {status === STATUS.END && (
          <div>
            <div>用时<span>{(endTime-startTime)/1000}</span>秒</div>
            <div>共{questions.length}道题，其中{score}道正确</div>
            <div><button onClick={restart}>重新开始</button></div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
