import React, {useState} from 'react';
import {Button} from '../common/button/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { TextField, InputLabel } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const theme = createTheme({
    palette: {
      primary: {
        main: orange[500],
      }
    },
  });

export const CreateProject = (props) => {

	const [projectNm, setProjectNm] = useState('');
	const [projectDesc, setProjectDesc] = useState('');

	const handleCreateProject = () => {

	}

    return (
            <ThemeProvider theme={theme}>
               <Box 
			   		sx={{ 
						display: 'flex', 
						flexDirection: 'column', 
						justifyContent: 'center', 
						alignItems: 'center', 
						width: '100%', 
						textAlign: 'center' 
						}}
				>
					<div>
						<Typography 
							variant='h4' 
							sx={{
								fontWeight:'bold', 
								color: '#333'
								}}
						>
							프로젝트 생성하기
						</Typography>
						<Typography 
							sx={{
								fontSize: '15px', 
								fontWeight:'bold', 
								margin:'15px 0', 
								color: '#333'}}
						>
							프로젝트 정보를 입력하고, 프로젝트 관리자로 시작해 보세요.
						</Typography>
					</div>
					<Box 
						sx={{marginTop: '20px', width: '70%'}}>
						<Box 
							sx={{ 
								display: 'flex', 
								justifyContent: 'center', 
								alignItems: 'center', 
								marginBottom: '10px'
								}}
						>
							<InputLabel 
								htmlFor="projectNm" 
								sx={{fontWeight:'bold', width:'30%', color: '#333'}} 
								required
							>
								프로젝트 이름
							</InputLabel>
							<TextField 
								sx={{width:'70%', maxLength: 15}} 
								required 
								placeholder='프로젝트 이름을 입력해주세요.' 
								id='projectNm'
								value={projectNm} 
							/>
						</Box>
					
						<Box 
							sx={{ 
								display: 'flex', 
								justifyContent: 'center', 
								alignItems: 'center', 
								marginBottom: '10px'
								}}
						>
							<InputLabel 
								htmlFor="projectDesc" 
								sx={{
									fontWeight:'bold', 
									width:'30%', 
									marginBottom: '100px', 
									color: '#333'
								}} 
								required
							>
								프로젝트 설명
							</InputLabel>
							<TextField 
								sx={{width:'70%',  '& input' : {maxLength:50} }}
								multiline 
								rows={5} 
								required 
								placeholder='프로젝트 설명을 입력해주세요.' 
								id='projectDesc'
								value={projectDesc} 
							/>
						</Box>
						<Button 
							label='프로젝트 생성' 
							style={{
								width: '70%', 
								padding: '12px 0', 
								margin: '15px 0', 
								fontSize: '16px', 
								fontWeight:'bold'
							}}
							onClick = {handleCreateProject}
						/>
					</Box>
              </Box>
            </ThemeProvider>
    )
}