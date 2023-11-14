import { useEffect, useState } from "react";
import './App.css';
import {BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Login } from "./components/login/Login";
import { PasswordFinder } from "./components/login/PasswordFinder";
import { TestProject } from "./components/project/TestProject";
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
  {path : '/testProject', element: <TestProject/> }
]

const App:React.FC = () => {          
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          {
            menus.map(menu => {
              return (
                <Route key={menu.path} element={<PageInterceptor />}>
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
