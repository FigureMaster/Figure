import { Avatar, Box, Typography } from '@mui/material';
import { Button } from '../common/button/Button';

const Profile = () => {
    return (
        <Box sx={{ minWidth: '300px', minHeight: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', margin: '16px'}}>
            <Avatar src="/broken-image.jpg"></Avatar>
            <Box>
                <Typography sx={{ fontSize: 16 }} color="text.secondary">닉네임 : FIGURE</Typography>
                <Typography sx={{ fontSize: 16 }} color="text.secondary">이메일 : figure@jisan.com</Typography>
                <Typography sx={{ fontSize: 16 }} color="text.secondary">소개 : 안녕하세요 ~ </Typography>
            </Box>
            <Button label='확인'></Button>
        </Box>
    );
};

export default Profile;
