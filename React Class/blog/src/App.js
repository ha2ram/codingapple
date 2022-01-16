/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState([
    '남자코트 추천',
    '강남 우동맛집',
    '파이썬독학',
  ]);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState('');

  var 어레이 = [2, 3, 4];

  var 뉴어레이 = 어레이.map(function (a) {
    return a * 2;
  });

  function 반복된UI() {
    var 어레이 = [];

    for (var i = 0; i < 3; i++) {
      어레이.push(<div>안녕</div>);
    }

    return 어레이;
  }

  let posts = '강남 고기 맛집';

  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = '여자코트 추천';
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{ color: 'blue', fontSize: '30px' }}>개발 Blog</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>
      {/* <div className="list">
        <h3>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
        </h3>
        <p>2월 17일 발행</p>
        <hr></hr>
      </div>
      <div className="list">
        <h3> {글제목[1]} </h3>
        <p>2월 18일 발행</p>
        <hr></hr>
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>2월 19일 발행</p>
        <hr></hr>
      </div> */}

      {/* {반복된UI()} */}

      {글제목.map(function (글, i) {
        return (
          <div className="list" key={i}>
            <h3
              onClick={() => {
                누른제목변경(i);
              }}
            >
              {글}
              <span
                onClick={() => {
                  따봉변경(따봉 + 1);
                }}
              >
                👍
              </span>
              {따봉}
            </h3>
            <p>2월 18일 발행</p>
            <hr></hr>
          </div>
        );
      })}

      {/* {입력값}
      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      /> */}

      <div className="publish">
        <input
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
        />
        <button
          onClick={() => {
            var arrayCopy = [...글제목];
            arrayCopy.unshift(입력값);
            글제목변경(arrayCopy);
          }}
        >
          저장
        </button>
      </div>

      <Profile />

      <button onClick={() => modal변경(!modal)}>열고닫기</button>

      {modal === true ? <Modal 글제목={글제목} 누른제목={누른제목} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2> {props.글제목[props.누른제목]} </h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name: 'Kim', age: 30 };
  }

  chaneName = () => {
    this.setState({ name: 'Park' });
  };

  render() {
    return (
      <div>
        <h3>프로필입니다</h3>
        <p>저는 {this.state.name} 입니다.</p>
        <button onClick={this.chaneName}>버튼</button>
      </div>
    );
  }
}

export default App;
