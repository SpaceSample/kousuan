import React, {useState, useEffect} from 'react';

// function genRandom() {
//   return Math.floor(Math.random()*20);
// }

// function genFuhao() {
//   return Math.random()>0.5;
// }

// function cal(n1, fuhao, n2){
//   return fuhao ? (n1 + n2) : (n1 - n2);
// }

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

function Question({data}){
  const [answer, setAnswer] = useState('');
  useEffect(() => {
    setAnswer(data.answer);
  }, [data]);
  const str = data.toString() + ' = ';
  const onChange = e => {
    setAnswer(e.target.value);
    data.answer = e.target.value;
  };

  return (
    <div>{str}<input type="text" value={answer} onChange={onChange}/></div>
  );
}

export {Question, genQuestionData};
