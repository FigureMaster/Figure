import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, InputAdornment, MenuItem, MenuList, TextField } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { orange } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useDebounce from '../../hooks/useDebounce';
import { IconButton } from '../common/button/Button';
import { Dropdown } from '../common/modal/Modal';
import Mail from '../mail/Mail';
import Notice from '../notice/Notice';
import Search from '../search/Search';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF'
        },
        secondary: {
            main: orange[500]
        }
    }
});

const Header = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const handleClick = (target: string) => (event: React.MouseEvent<HTMLElement>) => {
        if (target === 'mail') {
            setSearchOpen(false);
            setMailOpen(!mailOpen);
            setNoticeOpen(false);
            setSettingOpen(false);
        } else if (target === 'notice') {
            setSearchOpen(false);
            setMailOpen(false);
            setNoticeOpen(!noticeOpen);
            setSettingOpen(false);
        } else if (target === 'setting') {
            setSearchOpen(false);
            setMailOpen(false);
            setNoticeOpen(false);
            setSettingOpen(!settingOpen);
        }
        setAnchorEl(event.currentTarget);
    };

    const [searchOpen, setSearchOpen] = useState<boolean>(false);
    const [mailOpen, setMailOpen] = useState<boolean>(false);
    const [noticeOpen, setNoticeOpen] = useState<boolean>(false);
    const [settingOpen, setSettingOpen] = useState<boolean>(false);

    const [searchKeyword, setSearchKeyword] = useDebounce<string>('', 500);
    const searchOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(event.currentTarget.value || '');
    };
    useEffect(() => {
        setSearchOpen(!!searchKeyword);
        setMailOpen(false);
        setNoticeOpen(false);
        setSettingOpen(false);
    }, [searchKeyword]);

    const navigate = useNavigate();

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                    <Box sx={{ display: 'flex' }}></Box>
                    <Box sx={{ display: 'flex' }}>
                        <TextField
                            onClick={handleClick('search')}
                            onChange={searchOnChange}
                            color="secondary"
                            size="small"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        ></TextField>
                        <Dropdown open={searchOpen} anchorEl={anchorEl}>
                            <Search keyword={searchKeyword}></Search>
                        </Dropdown>
                        <IconButton onClick={handleClick('mail')}>
                            <MailOutlineIcon color="secondary" />
                        </IconButton>
                        <Dropdown open={mailOpen} anchorEl={anchorEl}>
                            <Mail></Mail>
                        </Dropdown>
                        <IconButton onClick={handleClick('notice')}>
                            <NotificationsNoneIcon color="secondary" />
                        </IconButton>
                        <Dropdown open={noticeOpen} anchorEl={anchorEl}>
                            <Notice></Notice>
                        </Dropdown>
                        <IconButton onClick={handleClick('setting')}>
                            <SettingsIcon color="secondary" />
                        </IconButton>
                        <Dropdown open={settingOpen} anchorEl={anchorEl}>
                            <MenuList>
                                <MenuItem
                                    onClick={() => {
                                        navigate('/myPage');
                                    }}
                                >
                                    마이페이지
                                </MenuItem>
                                <MenuItem>설정</MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        sessionStorage.removeItem('isAuthorized');
                                        navigate('/login', { replace: true });
                                    }}
                                >
                                    로그아웃
                                </MenuItem>
                            </MenuList>
                        </Dropdown>
                    </Box>
                </Box>
            </AppBar>
        </ThemeProvider>
    );
};

export default Header;
