import { useState } from "react";
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { TopTab } from './TopTab';
import { ProjectList } from "./ProjectList";
import { Board } from "./Board";
import { Members } from "./Members";
import { motion } from "framer-motion";

const theme = createTheme({
    palette: {
    primary: {
        main: orange[500],
    },
    },
});

export const MyPage = () => {
    const [currentTab, setCurrentTab] = useState(1);

    const handleTabsChange = (e, newCurrentTab) => {
        setCurrentTab(newCurrentTab);
}

    return (
    <>
        <TopTab currentTab={currentTab} handleTabsChange={handleTabsChange} />
        {currentTab === 1 && <ProjectList />}
        {currentTab === 2 && <Board title="활동내역"/>}
        {currentTab === 3 && <Board title="태그된글"/>}
        {currentTab === 4 && <Board title="북마크"/>}
        {currentTab === 5 && <Members />}
    
    </>
    )
}