import { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import { Card, CardHeader, CardContent, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { Divider } from "@mui/material";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Box from '@mui/material/Box';
import { getUserProjects, saveBookmark } from "../../actions/projectAction";

const theme = createTheme({
    palette: {
        primary: {
        main: orange[500],
        },
    },
});

interface Project {
    id: number;
    name: string;
    bookmarked: boolean;
    description : string;
}

const userId = 3; //임시

export const ProjectList = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        getUserProjects(userId)
        .then((res) => {
            console.log('data:' + res);
            setProjects(res);
        }) 
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const toggleBookmark = (id: number) => {
        const data = {
            userId: userId,
            projectId: id
        }

        saveBookmark(data)
        .then((res) => {
            if (!!res && !!res.projectId) {
                setProjects((prevProjects) =>
                    prevProjects.map((project) =>
                        project.id === id ? { ...project, bookmarked: !project.bookmarked } : project
                    )
                );
            }
        }) 
        .catch((err) => {
            console.log(err);
        });

    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xl" sx={{borderLeft: '4px solid orange'}}>
                <Typography variant='h4' color='black' sx={{marginTop: 10, marginBottom: 5}}>
                    Favorite
                </Typography>
                <Grid container spacing={2}>
                    {projects
                    .filter((project) => project.bookmarked)
                    .map((project) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
                        <Card sx={{maxWidth: 350, height: 170}} elevation={5}>
                        <CardHeader
                            title={project.name}
                            action={
                            <IconButton onClick={() => toggleBookmark(project.id)}>
                                {project.bookmarked ? 
                                (<StarIcon color="primary" />) : (<StarBorderIcon />)
                                }
                            </IconButton>
                            }
                        />
                        <CardContent>
                            <p>{project.description}</p>
                        </CardContent>
                        </Card>
                    </Grid>
                    ))}
                    {projects.filter((project) => project.bookmarked).length === 0 && projects.length >= 0 &&
                    <Container component="main" maxWidth="xl">
                        <Typography variant='h6' color='gray' sx={{marginLeft: 5 , marginTop: 5, marginBottom: 5}}>
                            즐겨찾는 프로젝트가 없습니다.
                        </Typography>
                    </Container>
                    }
                </Grid>
            </Container>
            
            <Container component="main" maxWidth="xl">
                <Divider sx={{ marginTop: 10}} />
            </Container>

            <Container component="main" maxWidth="xl" sx={{borderLeft: '4px solid orange'}}>
                <Typography variant='h4' color='black' sx={{marginTop: 10, marginBottom: 5}}>
                    Projects
                </Typography>
                <Grid container spacing={2}>
                    {projects
                    .filter((project) => !project.bookmarked)
                    .map((project) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
                        <Card sx={{maxWidth: 350, height: 170}} elevation={5}>
                            <CardHeader
                                title={project.name}
                                action={
                                <IconButton onClick={() => toggleBookmark(project.id)}>
                                    {project.bookmarked ? 
                                    (<StarIcon color="primary" />) : (<StarBorderIcon />)
                                    }
                                </IconButton>
                                }
                            />
                            <CardContent>
                                <p>{project.description}</p>
                            </CardContent>
                        </Card>
                    </Grid>
                    ))}
                    {/* 프로젝트 생성 카드  */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{maxWidth: 350 , height: 170}} elevation={5}>
                            <Box display='flex' justifyContent='center' alignItems='center' height='100%'>
                                <IconButton>
                                    <ControlPointIcon style={{ fontSize: '100px', color: '#e0e0e0' }} />
                                </IconButton>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    )
}


