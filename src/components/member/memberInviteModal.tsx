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
import Input from '@mui/material/Input'
import FaceIcon, { SpaRounded } from '@mui/icons-material';
import '../../index.css'


const theme = createTheme({
    palette: {
      primary: {
        main: orange[500],
      }
    },
    typography: {
      // fontFamily: 'NanumSquareEB'
    }
  });

  /**
   * 
   * 1. 칩 일정 길이 이상은 아래로 내리기
   *    일정 글자 수 이상 부터는 줄바꿈한다
   * 
   */



export const MemberInviteModal = (props) => {

  const [chips, setChips] = useState([]); 
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  
  // 칩 삭제
  const handleDelete = item => {
    let newChips = [...chips];
    newChips = chips.filter(i => i !== item)
    setChips(newChips);
  };

  // 입력 완료
  const handleKeyDown = evt => {
    if (["Enter", "Tab", ","].includes(evt.key)) { // 스페이스 바 + 추가/삭제할거 회의 
      evt.preventDefault();

      const value = email.trim();

      if (value && isValid(value)) {
        const newChips = [...chips, value];
        setChips(newChips);
        
        setEmail("");
      }
    }
  };

  // 이메일 검증
  const isValid = (email) => {
    let error = null;
    if (isInList(email)) {
      error = `이미 추가된 이메일입니다.`;
    }

    if (!isEmail(email)) {
      error = `유효한 이메일이 아닙니다.`;
    }

    if (error) {
      setErrorMsg(error);

      return false;
    }

    return true;
  };

  const isInList = (email) => {
    return chips.includes(email);
  };

  const isEmail = (email) => {
    return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
  };

  // 이메일 입력시 errorMsg지우고
  const handleChange = evt => {
    setErrorMsg(null);
    setEmail(evt.target.value);
  };

  const handlePaste = evt => {
    evt.preventDefault(); // 붙여넣기 기본 동작 막기 

    var paste = evt.clipboardData.getData("text");
    var emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);

    if (emails) {
      var toBeAdded = emails.filter(email => !isInList(email));
      const newChips = [...chips, ...toBeAdded];
      setChips(newChips);
    }
  };

    return (
            <ThemeProvider theme={theme}>
               <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', width: '100%', textAlign: 'center' }}>
                <Typography sx={{fontSize: '15px', fontWeight:'bold', margin:'15px 0', color: '#333'}}>[프로젝트 이름]에 멤버들을 초대해 보세요.</Typography>
               
                <Box sx={{ display: 'flex'}}>
                  {chips.map(item => (
                      <div className="tag-item" key={item}>
                        <Chip label={item} onDelete={()=> handleDelete(item)}/>
                      </div>
                  ))}
                </Box>

                <Input
                  value={email}
                  placeholder="이메일을 입력하고 엔터키를 눌러주세요."
                  onKeyDown={handleKeyDown}
                  onChange={handleChange}
                  onPaste={handlePaste}
                  sx={{width:'100%'}}
                />
                {errorMsg && <p className="error">{errorMsg}</p>}

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