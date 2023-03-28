import React from 'react';
//import styled from "styled-components";
import {Button} from '../common/button/Button';
import Input from '@mui/joy/Input';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { styled, css } from '@mui/material/styles';
import { TextField } from '@mui/material';


const theme = createTheme({
    palette: {
      primary: {
        main: orange[500],
      }
    },
  });

export const CreateProject = (props) => {
    return (
        <StyledContent>
            <ThemeProvider theme={theme}>
            <div  className="createProject">
            <div className="title">
                <h3>프로젝트 생성하기</h3>
                <h5>프로젝트 정보를 입력하고, 프로젝트 관리자로 시작해 보세요.</h5>
            </div>
            <div className="info">
                <label htmlFor="projectNm">프로젝트 이름</label>
                <StyledInput 
                    required
                            id='projectNm'

                />
            </div>
            <br/>
            <div className="info">
                <label htmlFor="projectDesc">프로젝트 설명</label>
                <StyledInput 
                            id= 'projectDesc'
                        
                />
            </div>
            <br/>
            <Button label='프로젝트 생성' size='small'/>
            </div>
            </ThemeProvider>
        </StyledContent>

    )
}


const StyledInput = styled(TextField)(({ theme }) => ({
    display: 'inline-flex',
  width: 500,

  '& .MuiInputBase-input': {
    color: theme.palette.primary.main,
    '&::placeholder': {
      color: theme.palette.text.disabled
    }
  },

  '& .MuiOutlinedInput-root': {
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
    }
  },
  }));

const StyledContent = styled('div')(css`
    .createProject {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }

    .title{
        text-align: center;
    }

    label{
        margin: 20px;
    }

    .info {
        text-align: center
    }
 
`)