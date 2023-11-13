import ViewKanbanTwoToneIcon from '@mui/icons-material/ViewKanbanTwoTone';
import { Avatar, Backdrop, Box, CircularProgress, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { useEffect, useState } from 'react';
import { integratedSearch, userSearch } from '../../actions/searchAction';
import { Project, User, Work } from '../common/CommonInterfaces';

interface searchResultProps {
    users: Array<User>;
    projects: Array<Project>;
    works: Array<Work>;
}

interface searchProps {
    keyword: string;
}
const Search = ({ keyword }: searchProps) => {
    const [searchResult, setSearchResult] = useState<searchResultProps>({ users: [], projects: [], works: [] });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const token = sessionStorage.getItem('isAuthorized');

    useEffect(() => {
        if (!keyword) {
            setSearchResult({ users: [], projects: [], works: [] });
            return;
        }
        setIsLoading(true);
        integratedSearch(token, keyword)
            .then((response) => {
                setSearchResult(response);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [keyword]);

    const onClickUser = (event: React.MouseEvent<HTMLElement>) => {
        setIsLoading(true);
        const userId = event.currentTarget.getAttribute('data-key');
        userSearch(token, +userId)
            .then((response) => {
                setSearchResult(response);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    const onClickProject = (event: React.MouseEvent<HTMLElement>) => {};
    const onClickWork = (event: React.MouseEvent<HTMLElement>) => {};

    return (
        <Box sx={{ width: 600, height: 400, overflow: 'auto' }}>
            {searchResult.users?.length > 0 && (
                <List subheader={<ListSubheader component="div">MEMBERS</ListSubheader>}>
                    <Box style={{ display: 'flex', flexDirection: 'row' }}>
                        {searchResult.users.map((user) => (
                            <ListItem sx={{ width: '25%' }} onClick={onClickUser} key={user.userId} data-key={user.userId} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Avatar src="/broken-image.jpg"></Avatar>
                                    </ListItemIcon>
                                    <ListItemText primary={user.name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </Box>
                </List>
            )}
            {searchResult.projects?.length > 0 && (
                <List subheader={<ListSubheader component="div">PROJECTS</ListSubheader>}>
                    {searchResult.projects.map((project) => (
                        <ListItem onClick={onClickProject} key={project.projectId} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ViewKanbanTwoToneIcon />
                                </ListItemIcon>
                                <ListItemText primary={project.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            )}
            {searchResult.works?.length > 0 && (
                <List subheader={<ListSubheader component="div">WORKS</ListSubheader>}>
                    {searchResult.works.map((work) => (
                        <ListItem onClick={onClickWork} key={work.workId} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ViewKanbanTwoToneIcon />
                                </ListItemIcon>
                                <ListItemText primary={work.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            )}
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoading}>
                <CircularProgress />
            </Backdrop>
        </Box>
    );
};

export default Search;
