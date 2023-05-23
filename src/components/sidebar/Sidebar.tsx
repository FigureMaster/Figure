import { useState } from "react";
import { Button, IconButton } from "../common/button/Button";
import { AppBar, Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, styled } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

const SidebarHeader = styled('header')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1, 1)
}));

const Sidebar = () => {

    const [open, setOpen] = useState(true);

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer open={open} variant="persistent" anchor="left">
                <SidebarHeader>
                    <Button label="FIGURE" variant="text"></Button>
                </SidebarHeader>
                
                <List subheader={ <ListSubheader component="div">Views</ListSubheader> }>
                    <ListItem key={"Table"} disablePadding>
                        <ListItemButton >
                            <ListItemIcon><TableChartOutlinedIcon /></ListItemIcon>
                            <ListItemText primary={"Table"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"Calendar"} disablePadding>
                        <ListItemButton >
                            <ListItemIcon><CalendarMonthOutlinedIcon /></ListItemIcon>
                            <ListItemText primary={"Calendar"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"Chart"} disablePadding>
                        <ListItemButton >
                            <ListItemIcon><InsertChartOutlinedIcon /></ListItemIcon>
                            <ListItemText primary={"Chart"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"DashBoard"} disablePadding>
                        <ListItemButton >
                            <ListItemIcon><DashboardOutlinedIcon /></ListItemIcon>
                            <ListItemText primary={"DashBoard"} />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
                <List subheader={ <ListSubheader component="div">Projects</ListSubheader> }>
                    <ListItem key={"ISMD"} disablePadding>
                        <ListItemButton >
                            <ListItemText primary={"ISMD"} />
                        </ListItemButton>
                    </ListItem><ListItem key={"LAMP7"} disablePadding>
                        <ListItemButton >
                            <ListItemText primary={"LAMP7"} />
                        </ListItemButton>
                    </ListItem><ListItem key={"FIGURE"} disablePadding>
                        <ListItemButton >
                            <ListItemText primary={"FIGURE"} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    )
}

export default Sidebar;