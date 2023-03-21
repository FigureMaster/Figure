import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
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


export const PasswordFinder = () => {
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

                        <InputLabel sx={{ mt: 3, fontWeight: 'bold'}}>
                            가입된 이메일을 입력 후 전송 버튼을 누르면
                        </InputLabel>
                        <InputLabel sx={{mb:3, fontWeight: 'bold'}}>
                            임시 비밀번호가 전송됩니다.
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
                        />
                
                
                        <Button 
                            type='submit' 
                            variant='contained' 
                            size='large'
                            fullWidth
                            sx={{ mt: 3, mb:2, color: 'white'}}
                        >
                            전송
                        </Button>
                        
                        <Link href="/" underline="none">로그인</Link>
                    
                        
                    </Box>
                </Container>
            </ThemeProvider>
        </motion.div>
    )
}