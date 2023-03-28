import { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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

export const TopTab = () => {
    const [currentTab, setCurrentTab] = useState("");
    
    const tabs = [
        { id : 1, label : '활동내역' },
        { id : 2, label : '태그된글' },
        { id : 3, label : '북마크' },
        { id : 4, label : 'Members'}
    ];

    const handleTabsChange = (e, newCurrentTab) => {
        setCurrentTab(newCurrentTab);
    }

    return (
        <ThemeProvider theme={theme}>
            <Tabs                                           
                indicatorColor="primary"
                sx={{ px: 3, tabSize: 20 }}                       
                onChange={handleTabsChange}                                                        
                textColor="primary"                           
                value={currentTab}                            
                // variant="scrollable"
                // scrollButtons="auto" 
                centered                          
                >                                               
                {tabs.map((tab) => (                          
                    <Tab
                    sx={{ width: '20%', fontSize: 20}}                                         
                    key={tab.id}                           
                    label={
                        <Typography                             
                        sx={{                                 
                            border: '1px solid',                
                            borderColor: 'primary',             
                            borderRadius: 3,                    
                            px: 2,                                            
                            fontWeight: 'bold',
                            backgroundColor: 'primary'            
                        }}                                    
                        >                                       
                        {tab.label}                           
                        </Typography>
                    }                                                      
                    value={tab.id}                         
                    />                                          
                ))}                                           
                </Tabs>
        </ThemeProvider>
    )
}