import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider
      store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);



// 폴더 구조
// actions(redux의 action들 모음)
// redux/reducers(redux의  reducers모음)
// hoc(auth등 로그인시 접근제어를 위한 컴포넌트 폴더)
// =>HOC(Higher-Order-Components)은 컴포넌트를 개발하는 하나의 패턴으로, 컴포넌트를 인자로 받아 새로운 컴포넌트로 변환해 반환하는 함수이다.
// utils(라이브러리를 모아둔다, axios등)