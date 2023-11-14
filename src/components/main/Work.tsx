import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface WorkProps {
	key:number;
	text:string;
}  
const Work:React.FC<WorkProps> = ({ text }) => {
	return (
		<Card sx={{marginBottom: '8px'}}>
			<CardContent>
				<Typography gutterBottom>{text}</Typography>
			</CardContent>
		</Card>
	);
};


export default Work;