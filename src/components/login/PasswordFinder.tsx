import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { Backdrop, CircularProgress, InputLabel } from '@mui/material';
import { motion } from "framer-motion";
import Grid from '@mui/material/Grid';
import { mailAuthenticate, temporaryNumberCheck, updateUserByEmail } from "../../actions/mailAction";
import { PASSWORD_REGEX, EMAIL_REGEX} from '../../common/commonConstants';
import { Alert } from '../common/modal/Modal';
import {useNavigate } from "react-router-dom";
import { UserType, TemporaryNumberCheckType } from "src/common/commonTypes";

const theme = createTheme({
    palette: {
      primary: {
        main: orange[500],
      },
    },
  });


export const PasswordFinder:React.FC = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [openAlert, setOpenAlert] = useState<boolean>(false);
    const [emailCheckMsg, setEmailCheckMsg] = useState<string>("");
    const [temporaryNumber, setTemporaryNumber] = useState<string>("");
    const [isEmailCheckOpen, setEmailCheckOpen] = useState<boolean>(false);
    const [msg, setMsg] = useState<string>("");
    const [isLoading, setLoading] = useState<boolean>(false);
    const [isTimeOver, setTimeOver] = useState<boolean>(false);
    const [emailCheckResult, setEmailCheckResult] = useState<string>("");
    const [isEmailCheck, setEmailCheck] = useState<boolean>(false);
    const [timerCount, setTimerCount] = useState<number>(0);
    const [time, setTime] = useState<string>('');
    let timer:NodeJS.Timeout;

    useEffect(() => {
        timer = setInterval(() => {
        let minutes = parseInt((timerCount / 60)+'', 10);
        let seconds = parseInt((timerCount % 60)+'', 10);

        setTime(`${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`);
        if(timerCount > 0) {
            setTimerCount(timerCount-1);
        } else if(timerCount == 0) {
            setTimeOver(true);
        }
        }, 1000)
        return () => clearInterval(timer)
      }, [timerCount])

    const navigate = useNavigate();

    const onEmailHandler = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setPassword(event.currentTarget.value)
    }

    const onCloseAlertHandler = ():void => setOpenAlert(false);

    const onTemporaryNumberHandler = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setTemporaryNumber(event.currentTarget.value);
    }

    const hasEmailError = ():boolean => {
        return !!email && !EMAIL_REGEX.test(email)
    }

    const hasPasswordError = ():boolean => {
        return !!password && !PASSWORD_REGEX.test(password)
    }

    const showErrorMsg = (err:string = '오류가 발생하였습니다.'):void => {
        setOpenAlert(true);
        setMsg(err);
    }

    const onEmailCheckReset = ():void => {
        setEmailCheckOpen(false);
        setTemporaryNumber('');
        setEmailCheckResult('');
        setEmailCheckMsg('');
    }

    const onEmailSendHandler = ():void => {
        if(!email || hasEmailError()) {
            setEmailCheckMsg('이메일을 확인해주세요');
            return;
        }

        setLoading(true);

        mailAuthenticate(email, '02')
        .then((res) => {
            if(res == 'isNotExistEmail') {
                setEmailCheckMsg('가입되지 않은 이메일 입니다.');
            } else if(res == 'success') {
                setTimeOver(false);
                setTemporaryNumber('');
                setTimerCount(178);
                setTime('02:59');
                setEmailCheckOpen(true);
            } else {
                console.log('오류 발생');
                showErrorMsg();
            }
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            showErrorMsg();
            setLoading(false);
        });
    }

    const onTemporaryNumberCheckHandler = ():void => {
        const data:TemporaryNumberCheckType = {
            email: email,
            temporaryNumber: temporaryNumber
        };

        temporaryNumberCheck(data)
        .then((res) => {
            setEmailCheckResult(res);
            if(res == 'success') {
                setEmailCheck(true);
                setTimeOver(true);
                clearInterval(timer);
            }
        })
        .catch((err) => {
            console.log(err);
            showErrorMsg();
            setEmailCheckResult('fail');
        });
    }

    const onPasswordChangeSendHandler = ():void => {
        let errorMsg:string = '';
        setMsg(errorMsg);
        if(!email || hasEmailError()) errorMsg += '이메일을 확인해주세요';
        if(!isEmailCheck) errorMsg += '이메일 인증을 완료해주세요';
        if(!password || hasPasswordError()) errorMsg += (!!errorMsg ? '\n' : '') + '비밀번호를 확인해주세요';


        if(!!errorMsg) {
            showErrorMsg(errorMsg);
            return;
        }

        const data:UserType = {
            email: email,
            password: password
        };


        updateUserByEmail(data)
        .then((res) => {
            if(!!res && res === 'success') {
                navigate('/', { replace: true});
            } else {
                showErrorMsg();
            }
            
        })
        .catch((err) => {
            showErrorMsg();
            console.log(err);
        });
    }


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    
                    >
                        <Typography component='h1' variant='h3' color='#fe921f'>
                            <Link href="/" underline="none">Figure</Link>
                        </Typography>

                        <InputLabel sx={{ mt: 3, fontWeight: 'bold'}}>
                            가입된 이메일을 입력 후 전송 버튼을 누르면
                        </InputLabel>
                        <InputLabel sx={{fontWeight: 'bold'}}>
                            임시 번호가 전송됩니다.
                        </InputLabel>
                        <InputLabel sx={{mb:3, fontWeight: 'bold'}}>
                            인증 후 비밀번호를 변경해주세요.
                        </InputLabel>

                        <TextField 
                            label='Email' 
                            name='email'
                            autoComplete='eamil'
                            margin='normal'
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><PersonOutlineIcon/></InputAdornment>,
                            }}
                            autoFocus
                            required
                            fullWidth
                            onChange={onEmailHandler}
                            value={email}
                            error={hasEmailError() || !!emailCheckMsg}
                            helperText={
                                hasEmailError() ? "이메일의 형식이 올바르지 않습니다" :  !!emailCheckMsg ? emailCheckMsg : null
                            }
                            disabled={isEmailCheckOpen}
                        />

                         { isEmailCheckOpen ? (
                            <><Grid container>
                                <Grid item sx={{ width: '50%'}}>
                                    <TextField 
                                        label='인증번호'
                                        name='temporaryNumber'
                                        autoComplete='temporaryNumber'
                                        margin='normal'
                                        autoFocus
                                        fullWidth
                                        sx={{ mt: 0}}
                                        size='small'
                                        onChange={onTemporaryNumberHandler}
                                        value={temporaryNumber}
                                        disabled={isTimeOver}
                                        helperText={
                                            !!emailCheckResult ? emailCheckResult == 'success' ? <p style={{color:'green',margin: '0px'}}>인증이 완료되었습니다.</p> : <p style={{color:'red',margin: '0px'}}>인증이 실패하였습니다.</p> : null
                                        }
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">{time}</InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid item sx={{ width: '19%', marginLeft: '3px'}}>
                                    <Button 
                                        type='submit' 
                                        variant='contained' 
                                        size='medium'
                                        fullWidth
                                        sx={{ mt: 0,color: 'white'}}
                                        disabled={isTimeOver}
                                        onClick={onTemporaryNumberCheckHandler}
                                    >
                                        확인
                                    </Button>
                                </Grid>
                            </Grid>
                            {isEmailCheck ? null :
                            <Typography sx={{ fontSize: '12px' ,fontWeight: 'bold', cursor: 'pointer', alignItems: 'left'}} onClick={onEmailCheckReset}>
                            이메일 재입력 또는 이메일 재전송
                            </Typography>}</>
                        ) : null}
                
                       { isEmailCheck ? <>
                        <TextField 
                            label='변경 비밀번호' 
                            name='password' 
                            type='password' 
                            margin='normal'
                            autoComplete='current-password'
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><LockOpenIcon/></InputAdornment>,
                            }}
                            sx={{ mt: 0}}
                            size='small'
                            required
                            fullWidth
                            onChange={onPasswordHandler}
                            value={password}
                            error={hasPasswordError()}
                            helperText={
                                hasPasswordError() ? "비밀번호는 영문 대소문자,특수문자, 숫자를 혼합하여 8~20자로 입력해주세요" : null
                            }
                        /></>
                        : null}
                
                        <Button 
                            type='submit' 
                            variant='contained' 
                            size='large'
                            fullWidth
                            sx={{ mt: 3, mb:2, color: 'white'}}
                            onClick={isEmailCheck ? onPasswordChangeSendHandler : onEmailSendHandler}
                        >
                            {isEmailCheck ?  '비밀번호 변경' :'전송'}
                        </Button>
                        
                        <Link href="/" underline="none">로그인</Link>

                        <Alert open={openAlert} onClose={onCloseAlertHandler} message={msg} title={""}/>
                    
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={isLoading}
                            >
                            <CircularProgress />
                        </Backdrop>
                    
                        
                    </Box>
                </Container>
            </ThemeProvider>
        </motion.div>
    )
}