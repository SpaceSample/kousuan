import React, {useState} from 'react';
import Style from './App.module.css';
import {genQuestionData, Result} from './question';
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
  const [allQuestionData, setQuestions] = useState([]);

  function start(type) {
    setQuestions(genAllQuestionData(type));
    setStartTime(new Date().getTime());
    setStatus( STATUS.PLAYING);
  }
  function genAllQuestionData(type){
    return genQuestionData(type);
  }
  function end(){
    setEndTime(new Date().getTime());
    let score =0;
    allQuestionData.forEach(qd => {
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
    <div className={Style.app}>
      
      <header className="App-header">
        {status === STATUS.INIT && (
          <div className={Style.start}>
            <img src="./hua.png" alt="hua"/>
            <div className={Style.welcome}>欢迎参加口算大挑战！</div>
            <button onClick={() => start('20+-')}>二十以内加减法</button>
            <br/>
            <button onClick={() => start('100+-')}>一百以内加减法</button>
            <br/>
            <button onClick={() => start('1000+-')}>一千以内加减法</button>
            <br/>
            <button onClick={() => start('10000+-')}>一万以内加减法</button>
            <br/>
            <button onClick={() => start('99*/')}>九九乘除法</button>
            <br/>
            <button onClick={() => start('+-*/')}>四则运算</button>
            <div className={Style.info}>
              谨以此程序向即忙工作又得完成老师布置的作业的宝爸宝妈们致敬！
              <br/>
              如有遇到问题或者建议请点<a href="https://github.com/SpaceSample/kousuan/issues">这里</a>。
            </div>
          </div>
        )}

        {status === STATUS.PLAYING && (
          <Exam data={allQuestionData} />
        )}
        {status === STATUS.PLAYING && (
          <button onClick={end}>交卷</button>
        )}

        {status === STATUS.END && (
          <div className={Style.end}>
            <div>用时<span>{(endTime-startTime)/1000}</span>秒</div>
            <div>共{allQuestionData.length}道题，其中{score}道正确</div>
            {(score < allQuestionData.length/4*3) && (<div>继续努力！<span role="img" aria-label="come on">💪💪💪</span></div>)}
            {(score >= allQuestionData.length/4*3) && (score < allQuestionData.length) && (<div>成绩不错啊！<span role="img" aria-label="smile">🙂🙂🙂</span></div>)}
            {(score === allQuestionData.length) && (<div>你太棒啦，完全正确<span role="img" aria-label="great">👍👍👍</span></div>)}
            <div><button onClick={restart}>重新开始</button></div>
            <div>
              {allQuestionData.map((qd, index) => (<Result data={qd} key={index} />))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
