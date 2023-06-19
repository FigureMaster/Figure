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

export const TopTab = ({ currentTab, handleTabsChange }) => {   
    const tabs = [
        { id : 1, label : 'My Projects' },
        { id : 2, label : 'Activity' },
        { id : 3, label : 'Tag' },
        { id : 4, label : 'Bookmark' },
        { id : 5, label : 'Members' }
    ];

    return (
        <ThemeProvider theme={theme}>
            <Tabs                                           
                indicatorColor="primary"
                sx={{ px: 3, tabSize: 20 }}                       
                onChange={handleTabsChange}                                                        
                textColor="primary"                           
                value={currentTab}                            
                centered                          
                >                                               
                {tabs.map((tab) => (                          
                    <Tab
                    sx={{ width: '20%', fontSize: 20}}                                         
                    key={tab.id}  //컴포넌트를 유일하게 식별하기 위한 값(탭 선택과는 무관)                          
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
                    value={tab.id} //선택된 탭을 구분하기 위한 값                        
                    />                                          
                ))}                                           
                </Tabs>
        </ThemeProvider>
    )
}