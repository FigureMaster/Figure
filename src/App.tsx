import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Login } from './components/login/Login';
import { PasswordFinder } from './components/login/PasswordFinder';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import Main from './components/main/Main';

const theme = createTheme({
    palette: {
        primary: {
            main: orange[500]
        }
    }
});

interface Menu {
    path: string;
    element: JSX.Element;
}

const menus: Menu[] = [
    { path: '/', element: <Main /> },
    { path: '/login', element: <Login /> },
    { path: '/passwordFinder', element: <PasswordFinder /> },
];

const App = () => (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <AnimatePresence>
                <Routes>
                    {menus.map((menu) => {
                        return <Route path={menu.path} element={menu.element} />;
                    })}
                </Routes>
            </AnimatePresence>
        </BrowserRouter>
    </ThemeProvider>
);

export default App;
