import React, {useState, useEffect} from 'react';
import Style from './question.module.css';

const randomInt = (min, max) => {
  if(max === min) {
    return min;
  }
  const range = (max > min ? (max - min) : (min - max)) + 1;
  return Math.floor(Math.random() * range) + min;
};

const randomBool = () => {
  return randomInt(0, 1) > 0;
};

const initArray = (size, initFunction) => {
  const arr = new Array(size);
  for(let i=0;i<size;i++){
    arr[i] = initFunction(i);
  }
  return arr;
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
      if (this.right.priority <= this.priority){
        rightStr = `(${rightStr})`;
      }
    }

    return `${leftStr}${this.val}${rightStr}`;
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

const random20 = () => {
  const dataList = [];
  for (let i=0;i<5;i++){
    const n1 = randomInt(3, 9);
    const n2 = randomInt(10-n1, 9);
    const on = randomBool() ? new OperatorTreeNode(n1, n2, '+') : new OperatorTreeNode(n2, n1, '+'); 
    const data = new QuestionData(on);
    dataList.push(data);
  }

  for (let i=0;i<5;i++){
    dataList.push(
      new QuestionData(
        new OperatorTreeNode(
          randomInt(3, 18), 
          randomInt(0, 2), 
          randomBool() ? '+' : '-')
      )
    );
  }

  for (let i=0;i<5;i++){
    const n1 = randomInt(3, 9);
    const n2 = randomInt(10-n1, 9);
    const data = new QuestionData(new OperatorTreeNode(n1 + n2, n2, '-'));
    dataList.push(data);
  }

  for (let i=0;i<5;i++){
    const n1 = randomInt(3, 9);
    const n2 = randomInt(10-n1, 9);
    const on1 = randomBool() ? (
        randomBool() ? new OperatorTreeNode(n1, n2, '+') : new OperatorTreeNode(n2, n1, '+')
      ) : (new OperatorTreeNode(n2 + n1, n1, '-'))

    const on2 = randomBool() ? new OperatorTreeNode(on1, randomInt(0, 20 - on1.result), '+') : new OperatorTreeNode(on1, randomInt(0, on1.result), '-'); 
    const data = new QuestionData(on2);
    dataList.push(data);
  }
  dataList.sort((a, b) => randomInt(-1, 1));
  return dataList;
};

const random99 = () => {
  const dataList = [];
  for (let i=0;i<20;i++){
    let n1 = randomInt(0, 9);
    const n2 = randomInt(1, 9);
    const operator = randomBool() ? '×' : '÷';
    if (operator === '÷') {
      const product = n1 * n2;
      n1 = product;
    }
    const data = new QuestionData(new OperatorTreeNode(n1, n2, operator));
    dataList.push(data);
  }
  return dataList;
};

const genOneRandom4 = (steps) => {
  if(steps<1){
    throw new Error('Illegal arguments');
  }
  const stepOrder = initArray(steps, i => i).sort(() => randomInt(-1, 1));
  const operatorChoice = ['+', '-', '×', '÷'];
  const operatorValue = initArray(steps, () => operatorChoice[randomInt(0, 3)]);
  const nodeMap = initArray(steps+1, () => randomInt(0, 9));

  for (let i=0;i<steps;i++){
    const operatorIndex = stepOrder[i];
    const leftNode = nodeMap[operatorIndex];
    const rightNode = nodeMap[operatorIndex + 1];
    const node = new OperatorTreeNode(leftNode, rightNode, operatorValue[operatorIndex]);
    nodeMap.forEach((n, i) => {
      if (typeof n !== 'number') {
        if (n === leftNode || n === rightNode) {
          nodeMap[i] = node;
        }
      }
    });
    nodeMap[operatorIndex] = node;
    nodeMap[operatorIndex + 1] = node;
  }
  return nodeMap[0];
}

const random4 = () => {
  const dataList = [];
  for (let i=0;i<20;i++){
    while(true){
      
      const node = genOneRandom4(3);
      const r = node.result;
      console.log('===');
      if (r !== Infinity && r !== -Infinity && r === Math.floor(r) ) {
        const data = new QuestionData(node);
        dataList.push(data);
        break;
      }
    }
  }
  return dataList;
};

const randomAddSub = (scope) => {
  const dataList = [];
  for (let i=0;i<20;i++){
    let n1 = randomInt(0, scope);
    const n2 = randomInt(0, scope - n1);
    const operator = randomBool() ? '+' : '-';
    if (operator === '-') {
      const tmp = n1 + n2;
      n1 = tmp;
    }
    const data = new QuestionData(new OperatorTreeNode(n1, n2, operator));
    dataList.push(data);
  }
  return dataList;
};

function genQuestionData(type) {
  if (type === '20+-') {
    return random20();
  } else if (type === '100+-') {
    return randomAddSub(100);
  } else if (type === '1000+-') {
    return randomAddSub(1000);
  } else if (type === '10000+-') {
    return randomAddSub(10000);
  } else if (type === '99*/') {
    return random99();
  } else if (type === '+-*/') {
    return random4();
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
  const str = data.toString() + '=';

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
          <button onClick={()=>input('back')}>{'<='}</button>
        </div>
        <div>
          <button onClick={()=>input('4')}>4</button>
          <button onClick={()=>input('5')}>5</button>
          <button onClick={()=>input('6')}>6</button>
          <button onClick={()=>input('-')}>-</button>
        </div>
        <div>
          <button onClick={()=>input('7')}>7</button>
          <button onClick={()=>input('8')}>8</button>
          <button onClick={()=>input('9')}>9</button>
          <button onClick={()=>input('0')}>0</button>
        </div>
        <div>
          <button onClick={()=>input('close')}>X</button>
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
