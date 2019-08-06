import React from 'react';
import ReactDOM from 'react-dom';
import { /*applyMiddleware,*/ createStore } from 'redux';
import { Provider } from 'react-redux';
// import logger from 'redux-logger';
import reducer from './modules';

import App from './components/App';

// todolist에서 써볼 것
// = 후크, redux(thunk랑 saga ) duck 패턴, styled component, json-server - axios , react router 활용, now 활용한 간단 배포

// redus middleware
// redux-actions 모듈

// redux의
// handleActions
// createAction
// bindActionCreator 사용
// rcc같은 스니펫 약자

// immutable.js나 immer.js 같은 라이브러리 사용

// 어떤 동작들을 수행해줄지
// - 검색
// - 카테고리 추가
// - 카테고리 삭제
// - Todo 추가
// - Todo 삭제

//data가 저장되게 만들어주기 

const store = createStore(reducer/*, applyMiddleware(logger)*/);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
