import { useEffect, useState } from "react";
import './App.css';
import {BrowserRouter,Routes,Route,Navigate,useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Login } from "./components/login/Login";
import { PasswordFinder } from "./components/login/PasswordFinder";
import { SignUp } from "./components/login/SignUp";
import { MyPage } from "./components/myPage/MyPage";
import Main from './components/main/Main';
import PageInterceptor from "./actions/PageInterceptor";

interface Menu {
    path: string;
    element: JSX.Element;
}

const menus: Menu[]  = [
  {path : '*', element: <Navigate replace to='/' /> },
  {path : '/', element: <Main/> }, 
  {path : '/login', element: <Login/> },
  {path : '/passwordFinder', element: <PasswordFinder/> },
  {path : '/signUp', element: <SignUp/> },
  {path : '/myPage', element: <MyPage/> },
  {path : '/main', element: <Main /> } // 제거해도 되는지 물어보고 제거 필요
]

const App = () => {
  // const navigate = useNavigate();
  // let isAuthorized = sessionStorage.getItem("isAuthorized");
  // let isAuthorized = sessionStorage.getItem("isAuthorized");
 
  // useEffect(() => {
  //   isAuthorized = sessionStorage.getItem("isAuthorized");
  //   // navigate('/', { replace: true});
  // }, [isAuthorized]);


       // <Route 
                //   path={menu.path} 
                //   element={
                //     !isAuthorized && menu.path !== '/login' && menu.path !== '/signUp' && menu.path !== '/passwordFinder' ? <Navigate replace to='/login' /> : menu.element
                //   } 
                //   />   
                
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          {
            menus.map(menu => {
              return (
                <Route element={<PageInterceptor />}>
                  <Route 
                    path={menu.path} 
                    element={menu.element} 
                  /> 
                </Route>  
                 
              )
            })
          }
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  )
};

export default App;
