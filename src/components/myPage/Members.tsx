import { useState, useEffect } from "react";
import { Button, Container, Grid, TextField, Typography, MenuItem, Box, Avatar, IconButton, Paper} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import ChatIcon from '@mui/icons-material/Chat';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import { Divider } from "@mui/material";
import { getUserProjects, getProjectUsers } from "../../actions/projectAction";
import { Project, User } from "../common/CommonInterfaces";

const theme = createTheme({
    palette: {
    primary: {
        main: orange[500],
    },
    },
});

const userId = 3; //임시 

export const Members = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [userList, setUserList] = useState<User[]>([]);
    const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

    useEffect(() => {
        getUserProjects(userId)
        .then((res) => {
            setProjects(res);
        }) 
        .catch((err) => {
            console.log(err);
        });
    }, []);


    const handleProjectChange = (event) => {
        const projectId = event.target.value || null;
        setSelectedProjectId(projectId);

        const data = {
            userId: userId,
            projectId: projectId
        };

        getProjectUsers(data)
        .then((res) => {
            setUserList(res);
        }) 
        .catch((err) => {
            console.log(err);
        });
        
    }
    
    return (
        <ThemeProvider theme={theme}>
        <Container maxWidth="xl" sx={{ py: 5 }}>
            <Typography variant="h4" sx={{ mb: 7 }}>
                Member
            </Typography>

            <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="프로젝트"
                        size="small"
                        sx={{width: "70%"}}
                        value={selectedProjectId}
                        onChange={handleProjectChange}
                        select
                    >
                        {projects.map((project) => (
                            <MenuItem key={project.projectId} value={project.projectId}>
                            {project.name}
                            </MenuItem>
                        ))}

                    </TextField>
                </Grid>
            </Grid>

            <Divider sx={{ width: "100%", mb: 3 }} />
            
            <Typography variant="h5" sx={{ mb: 7, fontWeight: 'bold' }}>
                Total 3
            </Typography>
            
            {userList.map((member) => (
                <Grid container spacing={2} key={member.userId} sx={{ alignItems: 'center', mb: 4 }}>
                    <Grid item>
                        <Avatar />
                    </Grid>
                    <Grid item sx={{ minWidth: '40%' }}>
                        <Typography variant="subtitle1">
                            {member.name}
                        </Typography>
                        <Typography variant="body2" color="gray">
                            {member.userDesc}
                        </Typography>
                    </Grid>
                    <Grid item >
                        <IconButton color="primary" >
                            <InfoIcon />
                        </IconButton>
                        <IconButton color="primary">
                            <MailIcon />
                        </IconButton>
                        <IconButton color="primary">
                            <ChatIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            ))}

        </Container>
        </ThemeProvider>
    )
}