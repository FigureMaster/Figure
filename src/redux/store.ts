import { applyMiddleware, createStore } from "redux";
import promiseMiddlerware from "redux-promise";
import reduxThunk from "redux-thunk";
import reducer from "./reducers";

const createStoreWidthMiddleware = applyMiddleware(
    promiseMiddlerware,
    reduxThunk
  )(createStore);

const store = createStoreWidthMiddleware(reducer
    //개발자 도구를 사용하기 위한 설정
    // Redux DevTools 크롬에서 설치 필요
    //,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;