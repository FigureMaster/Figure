import React, {useState} from 'react';
import {Button} from '../common/button/Button';
import {AlertDialog, Alert} from '../common/modal/Modal';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { TextField, InputLabel } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createProject } from "../../actions/projectAction";

const theme = createTheme({
    palette: {
      primary: {
        main: orange[500],
      }
    },
  });

export const CreateProject = ({onOpen}) => {

	const [name, setName] = useState('');
	const [jDesc, setJDesc] = useState('');
    const [msg, setMsg] = useState("");
	const [isConfirmOpen, setIsConfirmOpen] = useState(false);
	const [isAlertOpen, setIsAlertOpen] = useState(false);

	const onProjectNmHandler = (event) => {
        setName(event.currentTarget.value);
		setMsg('');
    }

	const onProjectDescHandler = (event) => {
        setJDesc(event.currentTarget.value);
    }

	const handleCreateProject = () => {
        let errorMsg = '';
        if(!name) errorMsg += '프로젝트 이름을 입력해주세요';

        if(!!errorMsg) {
			setMsg(errorMsg);
            return;
        }

        const data = {
            name: name,
            jDesc: jDesc
        };

        createProject(data)
        .then((res) => {
            if(!!res && !!res.result) {
                const result = res.result;
                if(result == 'success') {
                    setIsAlertOpen(()=> {return true;});
					//onOpen(0);
                    return;
                } else if(result == 'fail' && !!res.msg) {
                    //showErrorMsg(res.msg);
                    return;
                }
            }
        })
        .catch((err) => {
            console.log(err);
        });
		// TODO :: 생성한 프로젝트 화면으로 넘어가기
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
								color: '#333'
							}}
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
								htmlFor="name" 
								sx={{fontWeight:'bold', width:'30%', color: '#333'}} 
								required
							>
								프로젝트 이름
							</InputLabel>
							<TextField 
								sx={{width:'70%', maxLength: 15}} 
								required 
								placeholder='프로젝트 이름을 입력해주세요.' 
								id='name'
								onChange={onProjectNmHandler}
								helperText={!!msg? msg : ''}
								error={!!msg? true : false}
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
								htmlFor="jDesc" 
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
								id='jDesc'
								onChange={onProjectDescHandler}
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
							onClick = {()=>{setIsConfirmOpen(true)}}
						/>
					</Box>
              </Box>
				<AlertDialog 
					title='프로젝트 생성' 
					open={isConfirmOpen} 
					onConfirm={()=>{
						handleCreateProject();
					}}
					onClose={()=>{
						setIsConfirmOpen(false); 
					}} 
					message={name + ' 프로젝트를 생성하시겠습니까?'}/>
				<Alert 
					title='프로젝트 생성'
					message={name + ' 프로젝트가 생성되었습니다.'}
					onClose={()=>{
						setIsAlertOpen(()=>{return false;});
						onOpen(0);
					}}
					open={isAlertOpen}/>
            </ThemeProvider>
    )
}