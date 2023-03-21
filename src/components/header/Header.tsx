import AppBar from '@mui/material/AppBar';
import { Button, IconButton } from '../common/button/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, InputAdornment, TextField, createTheme, ThemeProvider, } from '@mui/material';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
    palette: {
        primary: createColor('#D96846'),
        secondary: createColor('#696969')
    },
});


const Header = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                    <Button color='secondary' label="FIGURE" startIcon={<MenuIcon></MenuIcon>} variant="text"></Button>
                    <Box sx={{ display: 'flex' }}></Box>
                    <Box sx={{ display: 'flex' }}>
                        <TextField size="small" InputProps={{ endAdornment: (<InputAdornment position="end"><SearchIcon /></InputAdornment>) }}></TextField>
                        <IconButton><MailOutlineIcon /></IconButton>
                        <IconButton><NotificationsNoneIcon /></IconButton>
                        <IconButton><PermIdentityIcon /></IconButton>
                        <IconButton><SettingsIcon /></IconButton>
                    </Box>
                </Box>
            </AppBar>
        </ThemeProvider>
    );
};

export default Header;
