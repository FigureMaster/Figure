import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { Backdrop, CircularProgress, InputLabel } from '@mui/material';
import { color, motion } from "framer-motion";
import Link from '@mui/material/Link';
import { Alert } from '../common/modal/Modal';
import { signUpUser } from "../../actions/userAction";
import {useNavigate } from "react-router-dom";
import { mailAuthenticate, temporaryNumberCheck } from "../../actions/mailAction";
import InputAdornment from '@mui/material/InputAdornment';
import { PASSWORD_REGEX, EMAIL_REGEX} from '../common/CommonConstants';

const theme = createTheme({
    palette: {
      primary: {
        main: orange[500],
      },
    },
  });

export const SignUp = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [desc, setDesc] = useState("")
    const [isEmailBlur, setEmailBlur] = useState(false)
    const [isAgree, setAgree] = useState(false)
    const [openAlert, setOpenAlert] = useState(false);
    const [msg, setMsg] = useState("");
    const [emailCheckMsg, setEmailCheckMsg] = useState("");
    const [temporaryNumber, setTemporaryNumber] = useState("");
    const [isEmailCheckOpen, setEmailCheckOpen] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isTimeOver, setTimeOver] = useState(false);
    const [emailCheckResult, setEmailCheckResult] = useState("");
    const [isEmailCheck, setEmailCheck] = useState(false);
    const [timerCount, setTimerCount] = useState(0);
    const [time, setTime] = useState('');
    let timer;

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

    const onCloseAlertHandler = () => setOpenAlert(false);
    
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    
    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }
    
    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }
    
    const onDescHandler = (event) => {
        setDesc(event.currentTarget.value)
    }

    const onAgreeHandler = () => {
        setAgree(!isAgree);
    }

    const onTemporaryNumberHandler = (event) => {
        setTemporaryNumber(event.currentTarget.value);
    }
    
    
    const hasEmailError = () => {
        return !!email && !EMAIL_REGEX.test(email)
    }
    
    const hasPasswordError = () => {
        return !!password && !PASSWORD_REGEX.test(password)
    }
        
    const hasNotSameError = () => !!confirmPassword && password != confirmPassword;

    const onEmailFocusHandler = (isNotFocus:boolean) => {
        setEmailBlur(isNotFocus);
        setEmailCheckMsg('');
    }

    const onEmailCheckReset = () => {
        setEmailCheckOpen(false);
        setTemporaryNumber('');
        setEmailCheckResult('');
        setEmailCheckMsg('');
    }

    const showErrorMsg = (err = '오류가 발생하였습니다.') => {
        setOpenAlert(true);
        setMsg(err);
    }

    const onEmailSendHandler = () => {
        if(!email || hasEmailError()) {
            setEmailCheckMsg('이메일을 확인해주세요');
            return;
        }

        setLoading(true);

        mailAuthenticate(email, '01')
        .then((res) => {
            if(res == 'isEmailDuplicated') {
                setEmailCheckMsg('이미 존재하는 이메일 입니다.');
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

    const onTemporaryNumberCheckHandler = () => {
        const data = {
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

    const onSubmitHandler = () => {
        let errorMsg = '';
        setMsg(errorMsg);
        if(!email || hasEmailError()) errorMsg += '이메일을 확인해주세요';
        if(!isEmailCheck) errorMsg += '이메일 인증을 완료해주세요';
        if(!password || hasPasswordError() || !confirmPassword || hasNotSameError()) errorMsg += (!!errorMsg ? '\n' : '') + '비밀번호를 확인해주세요';
        if(!name) errorMsg += (!!errorMsg ? '\n' : '') + '닉네임을 작성해주세요';
        if(!isAgree) errorMsg += (!!errorMsg ? '\n' : '') + '동의 체크를 눌러주세요';

        if(!!errorMsg) {
            showErrorMsg(errorMsg);
            return;
        }

        const data = {
            email: email,
            name: name,
            desc: desc,
            password: password
        };


        signUpUser(data)
        .then((res) => {
            console.log(res);
            if(!!res) {
                navigate('/', { replace: true});
            } else {
                console.log('회원가입 실패');
                showErrorMsg();
            }
            
        })
        .catch((err) => {
            console.log(err);
            showErrorMsg();
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
                    <Typography 
                        component='h1' 
                        variant='h3' 
                        color='#fe921f'
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Link href="/" underline="none">Figure</Link>
                    </Typography>

                    <InputLabel sx={{ mt: 3,fontWeight: 'bold'}}>
                        이메일
                    </InputLabel>
                    <Grid container>
                        <Grid item sx={{ width: '80%'}}>
                            <TextField 
                                name='email'
                                autoComplete='eamil'
                                margin='normal'
                                autoFocus
                                required
                                fullWidth
                                sx={{ mt: 0}}
                                size='small'
                                onChange={onEmailHandler}
                                value={email}
                                error={hasEmailError() || !!emailCheckMsg}
                                helperText={
                                    !!isEmailBlur && hasEmailError() ? "이메일의 형식이 올바르지 않습니다" :  !!emailCheckMsg ? emailCheckMsg : null
                                }
                                onBlur={()=>onEmailFocusHandler(true)}
                                onFocus={()=>onEmailFocusHandler(false)}
                                disabled={isEmailCheckOpen}
                            />
                        </Grid>
                        <Grid item sx={{ width: '19%', marginLeft: '3px'}}>
                            <Button 
                                type='submit' 
                                variant='contained' 
                                size='medium'
                                fullWidth
                                sx={{ mt: 0,color: 'white'}}
                                onClick={onEmailSendHandler}
                                disabled={isEmailCheckOpen}
                            >
                                인증
                            </Button>
                        </Grid>
                    </Grid>

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
                    <Typography sx={{ fontSize: '12px' ,fontWeight: 'bold', cursor: 'pointer'}} onClick={onEmailCheckReset}>
                    이메일 재입력 또는 이메일 재전송
                    </Typography>}</>
                    ) : null}
                    <InputLabel sx={{ mt: 1,fontWeight: 'bold'}}>
                        비밀번호
                    </InputLabel>
                    <TextField 
                        name='password' 
                        type='password' 
                        margin='normal'
                        autoComplete='current-password'
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
                    />

                    <InputLabel sx={{ mt: 1,fontWeight: 'bold'}}>
                        비밀번호 재확인
                    </InputLabel>
                    <TextField 
                        name='confirmPassword' 
                        type='password' 
                        margin='normal'
                        autoComplete='current-password'
                        sx={{ mt: 0}}
                        size='small'
                        required
                        fullWidth
                        onChange={onConfirmPasswordHandler}
                        value={confirmPassword}
                        error={hasNotSameError()}
                        helperText={
                            hasNotSameError() ? "입력한 비밀번호와 일치하지 않습니다." : null
                        }
                    />

                    <InputLabel sx={{ mt: 1,fontWeight: 'bold'}}>
                        닉네임
                    </InputLabel>
                    <TextField 
                        name='name'  
                        margin='normal'
                        sx={{ mt: 0}}
                        size='small'
                        required
                        fullWidth
                        onChange={onNameHandler}
                        value={name}
                    />

                    <InputLabel sx={{ mt: 1,fontWeight: 'bold'}}>
                        소개
                    </InputLabel>
                    <TextField 
                        name='desc'  
                        margin='normal'
                        sx={{ mt: 0}}
                        placeholder="내용을 입력해주세요"
                        rows={4}
                        multiline
                        fullWidth
                        onChange={onDescHandler}
                        value={desc}
                    />
                  

                    <FormControlLabel 
                        control={<Checkbox color='primary' onChange={onAgreeHandler}/>} 
                        label='동의 체크'
                    />
            
                    <Button 
                        variant='contained' 
                        size='large'
                        fullWidth
                        sx={{ mt: 3, mb:2, color: 'white'}}
                        onClick={onSubmitHandler}
                    >
                        가입하기
                    </Button>
                        
                    <Alert open={openAlert} onClose={onCloseAlertHandler} message={msg} title={""}/>
                    
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={isLoading}
                        >
                        <CircularProgress />
                    </Backdrop>
                </Container>
            </ThemeProvider>
        </motion.div>
    )
}