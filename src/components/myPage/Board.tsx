import { useState } from "react";
import { Button, Container, Grid, IconButton, InputAdornment, TextField, Typography
, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { orange } from "@mui/material/colors";
import { Divider } from "@mui/material";
import { SearchOptions } from "./SearchOption";

const theme = createTheme({
    palette: {
        primary: {
            main: orange[500],
        },
    },
    });


interface Work {
    id: number;
    name: string;
    desc: string;
    project: string;
    date: string;
    writer: string;
}

const works: Work[] = [
    {
        id: 1,
        name: 'studio 오류처리',
        desc: '이상한 오류',
        date: '2022-08-08',
        project: 'studio65',
        writer: '홍선경'
    },
    {
        id: 2,
        name: '매뉴얼 작성',
        desc: '수동 매뉴얼 작성' ,
        date: '2022-08-08',
        project: 'lamp7',
        writer: '장민지'
    },
    {
        id: 3,
        name: 'ssam 문의처리',
        desc: '또 왔네',
        date: '2022-08-08',
        project: 'ssam',
        writer: '박지수'
    },
    {
        id: 3,
        name: 'ssam 문의처리',
        desc: '또 왔네',
        date: '2022-08-08',
        project: 'ssam',
        writer: '박지수'
    },
    {
        id: 3,
        name: 'ssam 문의처리',
        desc: '또 왔네',
        date: '2022-08-08',
        project: 'ssam',
        writer: '박지수'
    },
    {
        id: 3,
        name: 'ssam 문의처리',
        desc: '또 왔네',
        date: '2022-08-08',
        project: 'ssam',
        writer: '박지수'
    }
];

export const Board = ({ title }) => {
    const [searchKeyword, setSearchKeyword] = useState<string>("");
    const [isSearchOptionOpen, setIsSearchOptionOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleSearchInputChange = (event: any) => {
        setSearchKeyword(event.target.value);
    };

    const filteredWorks = works.filter(
        (work) =>
            work.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            work.desc.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    const handleSearchButtonClick = (event: any) => {
        setIsSearchOptionOpen(!isSearchOptionOpen); 
        setAnchorEl(event.currentTarget); //버튼위치 
    }

    const handleCloseSearchOption = () => {
        setIsSearchOptionOpen(false);
      };

    return (
        <ThemeProvider theme={theme}>
        <Container maxWidth="xl" sx={{ py: 5 }}>
            <Typography variant="h4" sx={{ mb: 7 }}>
                {title}
            </Typography>

            <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="검색"
                        size="small"
                        value={searchKeyword}
                        onChange={handleSearchInputChange}
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position="end">
                                <IconButton size="small">
                                    <SearchIcon />
                                </IconButton>
                                <IconButton size="small"  onClick={handleSearchButtonClick}>
                                    <MoreVertIcon />
                                </IconButton>
                                {isSearchOptionOpen && (
                                    <SearchOptions isOpen={isSearchOptionOpen} onClose={handleCloseSearchOption} anchorEl={anchorEl} />
                                )}
                            </InputAdornment>
                            ),
                        }}
                        sx={{width: "70%"}}
                        />
                </Grid>
            </Grid>

            <Divider sx={{ width: "100%", mb: 3 }} />
            
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {title !== '북마크' && (
                            <TableCell>유형</TableCell>
                            )}
                            <TableCell>제목</TableCell>
                            <TableCell>설명</TableCell>
                            <TableCell>프로젝트</TableCell>
                            <TableCell>작성자</TableCell>
                            <TableCell>등록일</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {filteredWorks.map((work) => (
                        <TableRow key={work.id}>
                        {title !== '북마크' && (
                            <TableCell>게시글</TableCell>
                        )}
                        <TableCell>{work.name}</TableCell>
                        <TableCell>{work.desc}</TableCell>
                        <TableCell>{work.project}</TableCell>
                        <TableCell>{work.writer}</TableCell>
                        <TableCell>{work.date}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid container justifyContent="center" sx={{ mt: 3 }}>
                <Pagination count={10} color="primary" />
            </Grid>
        </Container>
        </ThemeProvider>
    );
};
