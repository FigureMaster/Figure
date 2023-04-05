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


export const Login = () => {
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
                            Figure
                        </Typography>
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
                        />
                        <TextField 
                            label='Password'
                            name='password' 
                            type='password' 
                            margin='normal'
                            autoComplete='current-password'
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><LockOpenIcon/></InputAdornment>,
                            }}
                            required
                            fullWidth
                        />
                        <Grid container>
                            <Grid item>
                                <FormControlLabel 
                                    control={<Checkbox value='maintainLogin' color='primary' />} 
                                    label='로그인 유지'
                                />
                            </Grid>
                            <Grid item>
                                <FormControlLabel 
                                    control={<Checkbox value='saveId' color='primary' />} 
                                    label='아이디 저장'
                                />
                            </Grid>
                        </Grid>
                
                        <Button 
                            type='submit' 
                            variant='contained' 
                            size='large'
                            fullWidth
                            sx={{ mt: 3, mb:2, color: 'white'}}
                        >
                            로그인
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="/signUp" underline="none">회원가입</Link>
                            </Grid>
                            <Grid item>
                                <Link href="/passwordFinder" underline="none">비밀번호 찾기</Link>
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item xs>
                                <InputLabel sx={{ mt: 3, mb:3, fontWeight: 'bold'}}>
                                    다른정보로 로그인
                                </InputLabel>
                            </Grid>
                        </Grid>
                        
                        <Grid container>
                            <Grid item xs>
                                <Button 
                                    type='submit' 
                                    variant='contained' 
                                    size='large'
                                    sx={{color: 'white', backgroundColor: 'rgb(52 152 219)'}}
                                >
                                    페이스북
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button 
                                    type='submit' 
                                    variant='contained' 
                                    size='large'
                                    sx={{color: 'white', backgroundColor: 'rgb(236, 243, 26)'}}
                                >
                                    카카오
                                </Button>
                            </Grid>
                        </Grid>
                        {/* 마이페이지 이동(임시) */}
                        <Grid container style={{margin: '30px'}}>
                            <Grid item xs>
                                <Link href="/myPage" underline="none">마이페이지(임시)</Link>
                            </Grid>
                        </Grid>                      
                    </Box>
                </Container>
            </ThemeProvider>
        </motion.div>
    )
}