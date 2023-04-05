import { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import { Card, CardHeader, CardContent, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

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
    desc : string;
}

const initProjects: Project[] = [
    { id : 1, name : 'lamp7', bookmarked: true, desc : 'test'},
    { id : 2, name : 'ssam', bookmarked: true , desc : 'test'},
    { id : 3, name : 'demo', bookmarked: false , desc : 'test'},
    { id : 4, name : 'studio65', bookmarked: false , desc : 'test'},
    { id : 5, name : 'jisanware', bookmarked: false , desc : 'test'},
    { id : 6, name : 'hdpoc', bookmarked: false , desc : 'test'},
    { id : 7, name : 'skpoc', bookmarked: false , desc : 'test'},
    { id : 8, name : 'design', bookmarked: false , desc : 'test'},
    { id : 9, name : 'test', bookmarked: false , desc : 'test'},
];


export const ProjectList = () => {
    const [projects, setProjects] = useState<Project[]>(initProjects);

    const toggleBookmark = (id: number) => {
        setProjects(projects.map((project) => project.id === id ? {...project, bookmarked: !project.bookmarked} : project))
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xl">
                <Typography variant='h4' color='black' sx={{marginTop: 10, marginBottom: 5}}>
                    Favorite
                </Typography>
                <Grid container spacing={2}>
                    {projects
                    .filter((project) => project.bookmarked)
                    .map((project) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
                        <Card sx={{maxWidth: 400}}>
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
                            <p>{project.desc}</p>
                        </CardContent>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Container>
            <Container component="main" maxWidth="xl">
                <Typography variant='h4' color='black' sx={{marginTop: 10, marginBottom: 5}}>
                    Projects
                </Typography>
                <Grid container spacing={2}>
                    {projects
                    .filter((project) => !project.bookmarked)
                    .map((project) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
                        <Card sx={{maxWidth: 400}}>
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
                            <p>{project.desc}</p>
                        </CardContent>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </ThemeProvider>
    )
}


