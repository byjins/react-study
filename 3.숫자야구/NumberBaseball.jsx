import React, { Component } from 'react';

function getNumbers() { // 숫자 4개를 랜덤하게 뽑는 함수(겹치지않음) }

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    trys: [],
  };

  onSubmitForm = (e) => {
    e.preventDefault();

  }

  onChangeInput = () => {

  }


  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
        </form>
        <div>시도 : {this.state.trys.length}</div>
        <ul>
          {trys.map((number)=> {
            return (
              <li>{number}</li>
            )
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseball;
