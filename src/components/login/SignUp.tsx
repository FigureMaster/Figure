import React from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
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