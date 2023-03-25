import { useState } from "react";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { InputLabel } from '@mui/material';
import { motion } from "framer-motion";

const theme = createTheme({
    palette: {
      primary: {
        main: orange[500],
      },
    },
  });

export const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [desc, setDesc] = useState("")
    const [isEmailBlur, setEmailBlur] = useState(false)
    
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
    
    const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    
    const hasEmailError = () => {
        return !!email && !emailRegEx.test(email)
    }
    
    const hasPasswordError = () => {
        return !!password && !passwordRegEx.test(password)
    }
        
    const hasNotSameError = () => !!confirmPassword && password != confirmPassword;

    const onEmailBlurHandler = () => setEmailBlur(true);
    const onEmailFocusHandler = () => setEmailBlur(false);
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
                        Figure
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
                                error={hasEmailError()}
                                helperText={
                                    !!isEmailBlur && hasEmailError() ? "이메일의 형식이 올바르지 않습니다" : null
                                }
                                onBlur={onEmailBlurHandler}
                                onFocus={onEmailFocusHandler}
                            />
                        </Grid>
                        <Grid item sx={{ width: '20%'}}>
                            <Button 
                                type='submit' 
                                variant='contained' 
                                size='medium'
                                fullWidth
                                sx={{ mt: 0,color: 'white'}}
                            >
                                인증
                            </Button>
                        </Grid>
                    </Grid>
                 
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
                        control={<Checkbox value='agree' color='primary' />} 
                        label='동의 체크'
                    />
            
                    <Button 
                        type='submit' 
                        variant='contained' 
                        size='large'
                        fullWidth
                        sx={{ mt: 3, mb:2, color: 'white'}}
                    >
                        가입하기
                    </Button>
                        
                        
                </Container>
            </ThemeProvider>
        </motion.div>
    )
}