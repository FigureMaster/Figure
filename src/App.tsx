import React from "react";
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Login } from "./components/login/Login";
import { PasswordFinder } from "./components/login/PasswordFinder";
<<<<<<< HEAD
import { TestProject } from "./components/project/TestProject";


=======
import { SignUp } from "./components/login/SignUp";
import { MyPage } from "./components/myPage/MyPage";
>>>>>>> 291361d5f331a607343b5708237b2c26c23ca18a

interface Menu {
  path: string
  element: JSX.Element
}

const menus: Menu[]  = [
  {path : '/', element: <Login/> },
  {path : '/passwordFinder', element: <PasswordFinder/> },
  {path : '/signUp', element: <SignUp/> },
  {path : '/myPage', element: <MyPage/> }
]

const App = () => (
    <AnimatePresence>
      <Routes>
        {
          menus.map(menu => {
            return (
              <Route path={menu.path} element={menu.element} />      
            )
          })
        }
      </Routes>
    </AnimatePresence>
);

export default App;