import React, {useState, useEffect} from 'react';
import Style from './question.module.css';

const randomInt = (min, max) => {
  const range = (max > min ? (max - min) : (min - max)) + 1;
  return Math.floor(Math.random() * range) + min;
};

class OperatorTreeNode {
  constructor(left, right, val){
    this.val = val;
    this.left = left;
    this.right = right;
  }

  get priority(){
    if ((typeof this.val) === 'number'){
      return 10000;
    } else if (this.val === '×' || this.val === '÷') {
      return 2;
    } else if (this.val === '+' || this.val === '-') {
      return 1;
    }
    return 0;
  }

  get result() {
    if ((typeof this.val) === 'number'){
      return this.val;
    }
    const leftRes =(typeof this.left) === 'number' ? this.left : this.left.result;
    const rightRes =(typeof this.right) === 'number' ? this.right : this.right.result;
    if(this.val === '+') {
      return leftRes + rightRes;
    } else if(this.val === '-') {
      return leftRes - rightRes;
    } else if(this.val === '×') {
      return leftRes * rightRes;
    } else if(this.val === '÷') {
      return leftRes / rightRes;
    }
    return 0;
  }

  toString() {
    if ((typeof this.val) === 'number'){
      return this.val.toString();
    }

    let leftStr = this.left.toString();
    if (this.left instanceof OperatorTreeNode) {
      if (this.left.priority < this.priority){
        leftStr = `(${leftStr})`;
      }
    }

    let rightStr = this.right.toString();
    if (this.right instanceof OperatorTreeNode) {
      if (this.right.priority < this.priority){
        rightStr = `(${rightStr})`;
      }
    }

    return `${leftStr} ${this.val} ${rightStr}`;
  }
}

class QuestionData {
  constructor(operatorTree){
    this.operatorTree = operatorTree;
    this.answer = '';
  }

  get res(){
    return this.operatorTree.result;
  }

  toString(){
    return this.operatorTree.toString();
  }

  isCorrect(){
    return this.answer !== '' && parseInt(this.answer) === this.res;
  }
}

QuestionData.random20 = () => {
  const n1 = randomInt(0, 20);
  const n2 = randomInt(0, 20);
  const operator = randomInt(0, 1) ? '+' : '-';
  const data = new QuestionData(new OperatorTreeNode(n1, n2, operator));
  if(data.res<0 || data.res>20){
    return QuestionData.random20();
  }
  return data;
}

QuestionData.random99 = () => {
  let n1 = randomInt(0, 9);
  const n2 = randomInt(1, 9);
  const operator = randomInt(0, 1) ? '×' : '÷';
  if (operator === '÷') {
    const product = n1 * n2;
    n1 = product;
  }
  const data = new QuestionData(new OperatorTreeNode(n1, n2, operator));
  return data;
}

function genQuestionData(type) {
  if (type === '20+-') {
    return QuestionData.random20();
  } else if (type === '99*/') {
    return QuestionData.random99();
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
