import { Box, Card, CardContent, Typography } from '@mui/material';

const Notice = () => {
    return (
        <Box sx={{ minWidth: 300, p: 1, display: 'grid', gridTemplateColumns: { md: '1fr' }, gap: 2 }}>
            <Card sx={{":hover": {boxShadow: 20}}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '16px 16px 0 16px'}}>
                    <Typography sx={{ fontSize: 16 }}>
                        일정 알림
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        10:56 AM
                    </Typography>
                </Box>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        [할 일] 일정이 3일 남았습니다.
                    </Typography>
                </CardContent>
            </Card>
            <Card>
                <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '16px 16px 0 16px'}}>
                    <Typography sx={{ fontSize: 16 }}>
                        일정 알림
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        10:56 AM
                    </Typography>
                </Box>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        [할 일] 일정이 3일 남았습니다.
                    </Typography>
                </CardContent>
            </Card>
            <Card>
                <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '16px 16px 0 16px'}}>
                    <Typography sx={{ fontSize: 16 }}>
                        일정 알림
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        10:56 AM
                    </Typography>
                </Box>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        [할 일] 일정이 3일 남았습니다.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Notice;
