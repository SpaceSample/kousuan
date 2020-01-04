import React, {useState} from 'react';

function genRandom() {
  return Math.floor(Math.random()*20);
}

function genFuhao() {
  return Math.random()>0.5;
}

function cal(n1, fuhao, n2){
  return fuhao ? (n1 + n2) : (n1 - n2);
}

function genQuestionData() {
  //return genRandom() + genFuhao() + genRandom();
  const n1 = genRandom();
  const n2 = genRandom();
  const fuhao = genFuhao();
  const res = cal(n1, fuhao, n2);
  if(res<0 || res>20){
    return genQuestionData();
  }
  return {n1, n2, fuhao, res};
}

function Question({data}){
  const [answer, setAnswer] = useState('');
  const str = data.n1+(data.fuhao?' + ':' - ')+data.n2+' = ';
  const onChange = e => {
    const val = e.target.value;
    setAnswer(val);
    data.answer = val;
    data.right = parseInt(data.answer) === data.res;
  }
  return (
    <div>{str}<input type="text" value={answer} onChange={onChange}/></div>
  );
}

export {Question, genQuestionData};
