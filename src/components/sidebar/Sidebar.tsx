import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, ThemeProvider, createTheme, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { getUserProjects } from '../../actions/userAction';
import { Button } from '../common/button/Button';

const SidebarHeader = styled('header')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1, 1)
}));

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getUserProjects().then((response) => {
            if (Array.isArray(response) && response.length > 0) {
                setProjects(response);
            }
        });
    }, []);

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer open={open} variant="persistent" anchor="left">
                <SidebarHeader>
                    <Button style={{ fontSize: '1.2rem', fontWeight: 'bold' }} label="FIGURE" variant="text"></Button>
                </SidebarHeader>

                <List
                    subheader={
                        <ListSubheader component="div" sx={{ fontSize: '1.1rem' }}>
                            Views
                        </ListSubheader>
                    }
                >
                    <ListItem key={'Table'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TableChartOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Table'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={'Calendar'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <CalendarMonthOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Calendar'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={'Chart'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InsertChartOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Chart'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={'DashBoard'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <DashboardOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={'DashBoard'} />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
                <List
                    subheader={
                        <ListSubheader component="div" sx={{ fontSize: '1.1rem' }}>
                            Projects
                        </ListSubheader>
                    }
                >
                    {projects.map((project) => (
                        <ListItem key={project.projectId} disablePadding>
                            <ListItemButton>
                                <ListItemText inset primary={project.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    ;
                </List>
            </Drawer>
        </Box>
    );
};

export default Sidebar;
