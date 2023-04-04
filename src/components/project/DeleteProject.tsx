import React from 'react';
import {Button} from '../common/button/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { TextField, InputLabel } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const theme = createTheme({
    palette: {
      primary: {
        main: orange[500],
      }
    },
  });

export const DeleteProject = (props) => {
    return (
        <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
             <div>
                 <Typography variant='h5' sx={{fontWeight:'bold', color: '#333'}}>정말로 삭제하시겠습니까?</Typography>
                 
                 <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                    <Typography sx={{fontSize: '15px', fontWeight:'bold', margin:'20px 0', color: '#AD0000'}}>삭제한 프로젝트 데이터는 되돌릴 수 없습니다.</Typography>
                    <Typography sx={{fontSize: '15px', fontWeight:'bold', color: '#333'}}>신중한 삭제를 위해,</Typography>
                    <Typography sx={{fontSize: '15px', fontWeight:'bold', color: '#333'}}>삭제하려는 프로젝트 이름을 입력해주세요.</Typography>
                 </Box>
             </div>
             <Box sx={{marginTop: '20px', width: '100%'}}>
                 <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px'}}>
                     <TextField sx={{width:'70%', maxLength: 15}} required placeholder='Figure-Master' id='projectNm' />
                 </Box>
                 <Button label='삭제하기' style={{width: '70%', padding: '12px 0', margin: '15px 0', fontSize: '16px', fontWeight:'bold'}}/>
             </Box>
       </Box>
     </ThemeProvider>
    )
}

