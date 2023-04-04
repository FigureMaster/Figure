import React from 'react';
import {Button} from '../common/button/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { TextField, InputLabel } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {Modal} from '../common/modal/Modal';
import { useState } from 'react';
import {DeleteProject} from './DeleteProject';



const theme = createTheme({
    palette: {
      primary: {
        main: orange[500],
      }
    },
  });



export const UpdateProject = (props) => {

    let [isOpen, setIsOpen] = useState([false]);

    const onOpen = (i) => {
        const copy = [...isOpen];
        if(!copy[i])
            copy[i] = true;
        else    
            copy[i] = false;

        setIsOpen(copy);
    }

    return (


    <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
             <div>
                 <Typography variant='h5' sx={{fontWeight:'bold', color: '#333'}}>프로젝트 정보 수정</Typography>
             </div>
             <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', width: '70%'}}>
                <div style={{width: '100%'}}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', marginBottom: '10px'}}>
                        <InputLabel htmlFor="projectNm" sx={{fontWeight:'bold',color: '#333'}} required>프로젝트 이름</InputLabel>
                        <TextField sx={{ width: '100%', maxLength: '15'}} required id='projectNm' />
                    </Box>
                
                    <Box sx={{ display: 'flex',  flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', marginBottom: '10px'}}>
                        <InputLabel htmlFor="projectDesc" sx={{fontWeight:'bold', color: '#333'}} required>프로젝트 설명</InputLabel>
                        <TextField sx={{width:'100%',  '& input' : {maxLength:50} }} multiline rows={5} required id='projectDesc' />
                    </Box>
                 </div>
                 <Button label='수정하기' style={{width: '70%', padding: '12px 0', margin: '15px 0', fontSize: '16px', fontWeight:'bold'}}/>
                 <Link variant='caption' underline='always' onClick={()=>{onOpen(0)}} sx={{color:'gray', textDecorationColor:'gray', cursor:'pointer'}}>프로젝트 삭제하기</Link>
             </Box>
       </Box>
       <Modal open={isOpen[0]} children={<DeleteProject/>} onClose={()=>{onOpen(0)}} maxWidth='xl' width={500} />
    </ThemeProvider>
    )
}

