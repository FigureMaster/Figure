import { useState } from "react";
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { orange } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { InputLabel, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const theme = createTheme({
    palette: {
        primary: {
            main: "#FFFFFF"
        },
        secondary: {
            main: orange[500]
        }
    }
});

interface ProjectHeaderProps {
    projectName: string;
    projectId: number;
}  

const ProjectHeader:React.FC<ProjectHeaderProps> = ({projectId, projectName}) => {
    const [isBookMark, setBookMark] = useState<boolean>(false)

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                    <Box sx={{ display: 'flex' }}>
                        <InputLabel sx={{fontWeight: 'bold'}}>
                            {projectName}
                        </InputLabel>
                        <IconButton onClick={() => setBookMark(!isBookMark)}>
                                {isBookMark ? 
                                (<StarIcon color="secondary" />) : (<StarBorderIcon />)
                                }
                        </IconButton>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                    
                    </Box>
                </Box>
            </AppBar>
        </ThemeProvider>
    );
}

export default ProjectHeader