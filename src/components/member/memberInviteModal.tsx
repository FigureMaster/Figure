import React from 'react';
import {Button} from '../common/button/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ShareIcon from '@mui/icons-material/Share';

const theme = createTheme({
    palette: {
      primary: {
        main: orange[500],
      }
    },
  });

export const MemberInviteModal = (props) => {
    /**
     * 이메일 초대
     * 1. keyup이벤트, 이메일 형식인지 검사
     *  -1. 이메일 형식이라면, 드롭다운으로 이메일 선택할 수 있게
     * 2. 드롭다운 선택, 클릭시 -> 이메일 text가 뱃지로 변경됨 
     * 3. 초대 링크는 좀 더 찾아보기 
     */

    return (
            <ThemeProvider theme={theme}>
               <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', width: '100%', textAlign: 'center' }}>
					<Typography sx={{fontSize: '15px', fontWeight:'bold', margin:'15px 0', color: '#333'}}>[프로젝트 이름]에 멤버들을 초대해 보세요.</Typography>
					<TextField sx={{width:'100%', maxLength: 15}} required placeholder='초대할 멤버의 이메일을 입력해주세요.' id='projectNm' />
					<div style={{width: '100%', display:'flex', justifyContent:'flex-end', alignItems:'center', fontSize:'15px', marginTop:'5px',cursor:'pointer'}}>
                    <ShareIcon sx={{fontSize:'18px'}}/>&nbsp;
                        <Link underline='always'>초대 링크 공유</Link>&nbsp;
                    </div>
                    <div style={{width: '100%', marginTop: '20px'}}>
                        <Button label='초대하기' style={{width:'50%', padding: '12px 0', margin: '15px 0', fontSize: '16px', fontWeight:'bold'}}/>
                    </div>
              </Box>
            </ThemeProvider>
    )
}