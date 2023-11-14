import { useState, useEffect } from "react";
import { Box } from '@mui/material';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import { motion } from "framer-motion";
import Project from './Project';
import ProjectHeader from './ProjectHeader';
import { MyPage } from "../myPage/MyPage";

const Main = () => {
    const [projectId, setProjectId] = useState<number>(0)
    const [projectName, setProjectName] = useState<string>("")

    const setProject = (projectId:number, projectName: string):void => {
        setProjectId(projectId);
        setProjectName(projectName);
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Box sx={{ float: 'left', width: '170px' }}>
                <Sidebar setProject={setProject}/>
            </Box>
            <Box sx={{ float: 'right', width: 'calc(100% - 170px)'}}>
                <Header/>
                <ProjectHeader projectId={projectId} projectName={projectName}/>
                {projectId > 0 ? <Project projectId={projectId} projectName={projectName} /> : <MyPage/>}
            </Box>
        </motion.div>
    );
};

export default Main;