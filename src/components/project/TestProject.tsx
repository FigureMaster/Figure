import React from 'react';
//import styled from "styled-components";
import {Modal} from '../common/modal/Modal';
import {Button} from '../common/button/Button';
import {UpdateProject} from './UpdateProject';
import {DeleteProject} from './DeleteProject';
import {CreateProject} from './CreateProject';
import { useState } from 'react';


export const TestProject = () => {
    
    let [isOpen, setIsOpen] = useState([false,false,false]);

    const onOpen = (i) => {
        const copy = [...isOpen];
        if(!copy[i])
            copy[i] = true;
        else    
            copy[i] = false;

        setIsOpen(copy);
    }

    return (
        <>
        <div>
            <Button label='프로젝트 생성' onClick={()=>{onOpen(0)}}/>
            <Button label='프로젝트 정보 수정' onClick={()=>{onOpen(1)}}/>
            <Button label='프로젝트 삭제' onClick={()=>{onOpen(2)}}/>

            <Modal open={isOpen[0]} children={<CreateProject/>} onClose={()=>{onOpen(0)}} maxWidth='xl' width={800} />
            <Modal open={isOpen[1]} children={<UpdateProject/>} onClose={()=>{onOpen(1)}} maxWidth='xl' width={800} />
            <Modal open={isOpen[2]} children={<DeleteProject/>} onClose={()=>{onOpen(2)}} maxWidth='xl' width={500} />
        </div>
        </>
    )
}