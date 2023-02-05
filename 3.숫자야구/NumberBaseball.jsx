import React, { useState } from 'react';
import { getNumbers } from './getNumbers';
import Try from './Try';

const NumberBaseball = () => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(getNumbers); // lazy init
  const [tries, setTries] = useState([]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (value === answer.join('')) {
      setResult('홈런');
      setTries([...tries, { try: value, result: '홈런' }]);
      alert('게임을 다시 시작합니다!');
      setValue('');
      setAnswer(getNumbers());
      setTries([]);
    } else {
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10번넘게 실패 답은 ${answer.join(',')}입니다!`);
        alert('게임을 다시 시작합니다!');
        setResult('');
        setValue('');
        setAnswer(getNumbers());
        setTries([]);
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }

        setTries((prev) => [
          ...prev,
          {
            tries: value,
            result: `${strike} 스트라이크, ${ball} 볼입니다.`,
          },
        ]);

        setValue('');
      }
    }
    setValue('');
  };

  const onChangeInput = (e) => {
    console.log(answer);
    setValue(e.target.value);
  };
  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input maxLength={4} value={value} onChange={onChangeInput} />
      </form>
      <div>시도 : {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          return <Try key={`${i + 1}`} tryInfo={v} />;
        })}
      </ul>
    </>
  );
};

export default NumberBaseball;
