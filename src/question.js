import React, {useState, useEffect} from 'react';
import Style from './question.module.css';

const randomInt = (min, max) => {
  const range = (max > min ? (max - min) : (min - max)) + 1;
  return Math.floor(Math.random() * range) + min;
};

class QuestionData {
  constructor(n1, n2, operator){
    this.n1 = n1;
    this.n2 = n2;
    this.operator = operator;
    this.answer = '';
  }

  toString(){
    return this.n1 + this.operator + this.n2;
  }

  isCorrect(){
    return this.answer !== '' && parseInt(this.answer) === this.res;
  }
}

class AddSubQuestionData extends QuestionData{
  constructor(n1, n2, operator){
    super(n1, n2, operator);
    this.res = operator === '-' ? (n1 - n2) : (n1 + n2);
  }
}

AddSubQuestionData.random20 = () => {
  const n1 = randomInt(0, 20);
  const n2 = randomInt(0, 20);
  const operator = randomInt(0, 1) ? '+' : '-';
  const data = new AddSubQuestionData(n1, n2, operator);
  if(data.res<0 || data.res>20){
    return AddSubQuestionData.random20();
  }
  return data;
}

class MultiDivQuestionData extends QuestionData{
  constructor(n1, n2, operator){
    super(n1, n2, operator);
    this.res = operator === '÷' ? (n1 / n2) : (n1 * n2);
    if (operator === '÷') {
      if (n2 === 0) {
        throw new Error(n1 + ' ÷ 0?');
      }
      const product = n1 * n2;
      this.res = n1;
      this.n1 = product;
    } else {
      this.res = n1 * n2;
    }
  }
}

MultiDivQuestionData.random99 = () => {
  const n1 = randomInt(0, 9);
  const n2 = randomInt(1, 9);
  const operator = randomInt(0, 1) ? '×' : '÷';
  const data = new MultiDivQuestionData(n1, n2, operator);
  return data;
}

function genQuestionData(type) {
  if (type === '20+-') {
    return AddSubQuestionData.random20();
  } else if (type === '99*/') {
    return MultiDivQuestionData.random99();
  } else {
    throw new Error('Unknown type');
  }
}

function Question({data, index}){
  const [answer, setAnswer] = useState('');
  const [keyboardOpen, setKeyboardOpen] = useState(true);
  useEffect(() => {
    setAnswer(data.answer);
  }, [data]);
  const str = data.toString() + ' = ';

  const setAnswerVaule = v => {
    setAnswer(v);
    data.answer = v;
  };

  const onChange = e => {
    setAnswerVaule(e.target.value);
  }

  const input = v => {
    if (v === 'back') {
      if(answer) {
        setAnswerVaule(answer.substring(0, answer.length - 1));
      }
    } else if (v === 'close') {
      setKeyboardOpen(false);
    } else {
      setAnswerVaule(answer + v);
    }
  };

  return (
    <div>
      <div className={Style.index}>第{index + 1}题：</div>
      <div className={Style.question}>{str}<input type="text" value={answer} onChange={onChange}/></div>
      {keyboardOpen && (<div className={Style.keyboard}>
        <div>
          <button onClick={()=>input('1')}>1</button>
          <button onClick={()=>input('2')}>2</button>
          <button onClick={()=>input('3')}>3</button>
        </div>
        <div>
          <button onClick={()=>input('4')}>4</button>
          <button onClick={()=>input('5')}>5</button>
          <button onClick={()=>input('6')}>6</button>
        </div>
        <div>
          <button onClick={()=>input('7')}>7</button>
          <button onClick={()=>input('8')}>8</button>
          <button onClick={()=>input('9')}>9</button>
        </div>
        <div>
          <button onClick={()=>input('back')}>{'<-'}</button>
          <button onClick={()=>input('0')}>0</button>
          <button onClick={()=>input('close')}>x</button>
        </div>
      </div>)}
      {!keyboardOpen && (<button onClick={() => setKeyboardOpen(true)}>数字键盘</button>)}
    </div>
    
  );
}

function Result({data}) {
  const isCorrect = data.isCorrect();
  return (
    <div className={Style.result}>
      <span className={(isCorrect ? Style.isCorrect : Style.isWrong)}>{data.toString() + ' = ' + data.answer}</span>
      {!isCorrect && (<span>{data.res}</span>)}
    </div>
  );
}

export {Question, genQuestionData, Result};
