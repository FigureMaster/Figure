import React, {useState} from 'react';
import {Button} from '../common/button/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { Autocomplete, TextField} from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ShareIcon from '@mui/icons-material/Share';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material';



const theme = createTheme({
    palette: {
      primary: {
        main: orange[500],
      }
    },
  });
    /**
     * 
     * 뱃지로 변경하기
     * 1. 이메일 형식 체크
     * let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
     * 2. 이메일 형식에 맞다면, 해당 value state에 넣기 -> :: validEmail (드롭다운으로 보일예정)
     * if(TextField.val())
     * 3. validEmail에 있는 값 dropdown으로 보여주기
     * 4. dropDown 클릭하면 badge state로 옮기기
     * 5. badge state로 옮겨진 값 badge로 보여주기 
     */
export const MemberInviteModal = (props) => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [validEmail, setValidMail] = useState('');
  const [validEmailList, setValidEmailList] = useState([]);
  const list = ['test1', 'test2'];

  const handleEmailChange = (e) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if(emailPattern.test(e.target.value)) {
      setValidMail(e.target.value);
      setValidEmailList([e.target.value]);
    } else {
      setValidEmailList([]);
    }
  };
  

    return (
            <ThemeProvider theme={theme}>
               <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', width: '100%', textAlign: 'center' }}>
                <Typography sx={{fontSize: '15px', fontWeight:'bold', margin:'15px 0', color: '#333'}}>[프로젝트 이름]에 멤버들을 초대해 보세요.</Typography>
                <Autocomplete 
                        
                        id='projectNm' 
                        sx={{width:'100%', maxLength: 15}}  
                        options = {validEmailList}
                        renderInput={(params) => 
                            <TextField 
                              placeholder='초대할 멤버의 이메일을 입력해주세요.'  
                              onChange={handleEmailChange}
                              {...params} 
                              InputProps={{
                                startAdornment: (
                                  <>
                                    {params.InputProps.endAdornment}
                                    <Chip label="Deletable" onDelete={() => {}} />
                                  </>
                                )
                              }}
                          /> }
                        



                 />
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