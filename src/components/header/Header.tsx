import AppBar from '@mui/material/AppBar';
import { Button, IconButton } from '../common/button/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, InputAdornment, Menu, MenuItem, TextField } from '@mui/material';
import { useState } from 'react';
import { Dropdown } from '../common/modal/Modal';
import Notice from '../notice/Notice';
import Profile from '../profile/Profile';
import Mail from '../mail/Mail';
import Search from '../search/Search';

const Header = () => {

    const [search, setSearch] = useState<null | HTMLElement>(null);
    const searchOpen = Boolean(search);

    const handleSearch = (event) => {setSearch(event.currentTarget)};

    const [mail, setMail] = useState<null | HTMLElement>(null);
    const mailOpen = Boolean(mail);

    const [notice, setNotice] = useState<null | HTMLElement>(null);
    const noticeOpen = Boolean(notice);

    const [identity, setIdentity] = useState<null | HTMLElement>(null);
    const identityOpen = Boolean(identity);

    const [setting, setSetting] = useState<null | HTMLElement>(null);
    const settingOpen = Boolean(setting);

    return (
        <AppBar position="static">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                <Button color='secondary' label="FIGURE" startIcon={<MenuIcon></MenuIcon>} variant="text"></Button>
                <Box sx={{ display: 'flex' }}></Box>
                <Box sx={{ display: 'flex' }}>
                    <TextField onClick={handleSearch} color='secondary' size="small" InputProps={{ endAdornment: (<InputAdornment position="end"><IconButton><SearchIcon /></IconButton></InputAdornment>) }}></TextField>
                    <Dropdown open={searchOpen} anchorEl={search} onClose={() => {setSearch(null)}}><Search></Search></Dropdown>
                    <IconButton onClick={(event: React.MouseEvent<HTMLButtonElement>) => {setMail(event.currentTarget)}}><MailOutlineIcon /></IconButton>
                    <Dropdown open={mailOpen} anchorEl={mail} onClose={() => {setMail(null)}}><Mail></Mail></Dropdown>
                    <IconButton onClick={(event: React.MouseEvent<HTMLButtonElement>) => {setNotice(event.currentTarget)}}><NotificationsNoneIcon /></IconButton>
                    <Dropdown open={noticeOpen} anchorEl={notice} onClose={() => {setNotice(null)}}><Notice></Notice></Dropdown>
                    <IconButton onClick={(event: React.MouseEvent<HTMLButtonElement>) => {setIdentity(event.currentTarget)}}><PermIdentityIcon /></IconButton>
                    <Dropdown open={identityOpen} anchorEl={identity} onClose={() => {setIdentity(null)}}><Profile></Profile></Dropdown>
                    <IconButton onClick={(event: React.MouseEvent<HTMLButtonElement>) => {setSetting(event.currentTarget)}}><SettingsIcon /></IconButton>
                    <Dropdown open={settingOpen} anchorEl={setting} onClose={() => {setSetting(null)}}>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>My account</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </Dropdown>
                </Box>
            </Box>
        </AppBar>
    );
};

export default Header;
