import { useState } from "react";
import { Button, Container, Grid, IconButton, InputAdornment, TextField, Typography
, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import { Popover, Box,  FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, Select, MenuItem
    ,Radio, RadioGroup } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: orange[500],
        },
    },
    });


export const SearchOptions = ({ onClose, isOpen, anchorEl }) => {

    const handleClose = () => {
        onClose();
    };

    return (
        <Popover
            open={isOpen}
            onClose={onClose}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "left"
            }}
        >
            <Box sx={{ p: 5, width: 400, height: 400 }}>
                {/* <Typography variant="subtitle1" sx={{ mb: 2 }}>
                    검색 옵션
                </Typography> */}

                <Box sx = {{ mb: 2 }}>
                    <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold'}}>
                        검색 기간
                    </Typography>
                    <RadioGroup
                        aria-label="searchPeriod"
                        name="searchPeriod"
                        sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}
                    >
                    <FormControlLabel value="전체" control={<Radio />} label="전체" />
                    <FormControlLabel value="일주일" control={<Radio />} label="일주일" />
                    <FormControlLabel value="1개월" control={<Radio />} label="1개월" />
                    <FormControlLabel value="3개월" control={<Radio />} label="3개월" />
                    <FormControlLabel value="6개월" control={<Radio />} label="6개월" />
                    <FormControlLabel value="1년 이상" control={<Radio />} label="1년 이상" />
                    </RadioGroup>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
                    <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
                        프로젝트
                    </Typography>
                    <FormControl sx={{ m: 1, width: '70%' }} size="small">
                        <Select
                            variant="outlined"
                            sx={{ width: '100%' }}
                        >
                            <MenuItem value="project1">프로젝트 1</MenuItem>
                            <MenuItem value="project2">프로젝트 2</MenuItem>
                            <MenuItem value="project3">프로젝트 3</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
                    <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
                        작성자
                    </Typography>
                    <TextField
                        variant="outlined"
                        size="small"
                        sx={{ width: '70%', ml: 3 }}
                    />
                </Box>

                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
                    <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
                        내용
                    </Typography>
                    <TextField
                        variant="outlined"
                        size="small"
                        sx={{ width: '70%', ml: 5 }}
                    />
                </Box>
                
                <Box sx={{ display: "flex", gap: 2, justifyContent: 'center', mt: 5}}>
                    <Button variant="contained" onClick={handleClose} sx={{color: 'white', backgroundColor: 'gray'}}>
                        취소
                    </Button>
                    <Button variant="contained" onClick={handleClose}>
                        검색
                    </Button>
                </Box>
            </Box>
        </Popover>
    );
};