import { useState } from "react";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { TopTab } from './TopTab';
import { ProjectList } from "./ProjectList";


const theme = createTheme({
    palette: {
      primary: {
        main: orange[500],
      },
    },
  });

export const MyPage = () => {
   
    return (
      <>
        <TopTab/>
        <ProjectList/>
      </>
    )
}