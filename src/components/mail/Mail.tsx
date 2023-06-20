import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';
import { Button } from '../common/button/Button';

const Mail = () => {
    return (
        <Box sx={{ minWidth: 300, p: 1, display: 'grid', gridTemplateColumns: { md: '1fr' }, gap: 2 }}>
            <Box sx={{ minWidth: 300, display: 'grid', gridTemplateColumns: { md: '1fr 1fr 2fr' }, gap: 2}}>
                <Button label="받은 쪽지함"></Button>
                <Button label="보낸 쪽지함"></Button>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button label="쪽지 작성"></Button>
                </Box>
            </Box>
            <Card sx={{":hover": {boxShadow: 5}}}>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Avatar src="/broken-image.jpg"></Avatar>
                    <Box>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary">
                            김유섭
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary">
                            쪽지 제목
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary">
                            쪽지 내용 간략하게 보여주기
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary">
                            10:56 AM
                        </Typography>
                        {/* <Button label="확인"></Button> */}
                    </Box>
                </CardContent>
            </Card>
            <Card sx={{":hover": {boxShadow: 5}}}>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Avatar src="/broken-image.jpg"></Avatar>
                    <Box>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary">
                            김유섭
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary">
                            쪽지 제목
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary">
                            쪽지 내용 간략하게 보여주기
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary">
                            10:56 AM
                        </Typography>
                        {/* <Button label="확인"></Button> */}
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Mail;
