import React from 'react';
import {Modal} from '../common/modal/Modal';
import {Button} from '../common/button/Button';
import Input from '@mui/joy/Input';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { styled, css } from '@mui/material/styles';

export const DeleteProject = (props) => {
    return (
        <StyledContent>
            <div  className="createProject">
            <div className="title">
                <h3>프로젝트 생성하기</h3>
                <h5>프로젝트 정보를 입력하고, 프로젝트 관리자로 시작해 보세요.</h5>
            </div>
            <div className="info">
                <label htmlFor="projectNm">프로젝트 이름</label>
                <StyledInput color='primary'
                    slotProps={{
                        input: {
                            id: 'projectNm'
                        }
                    }}
                />
            </div>
            <br/>
            <div className="info">
                <label htmlFor="projectDesc">프로젝트 설명</label>
                <StyledInput color='primary'
                    slotProps={{
                        input: {
                            id: 'projectDesc'
                        }
                    }}
                />
            </div>
            <br/>
            <Button label='프로젝트 생성'/>
            </div>
        </StyledContent>
    )
}


const StyledInput = styled(Input)(css`
    display: inline-flex;
    width: 500px;

    #projectNm {
        width: 100%;
    }
`)


const StyledContent = styled('div')(css`
    .createProject {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }

    .title {
        text-align: center;
    }

    label {
        margin: 20px;
    }

    .info {
        text-align: center;
    }
`)
