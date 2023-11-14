import React from 'react';
import { Box } from "@mui/material";
import Work from './Work';

interface CategoryProps {
    title: string;
    works: {
		id:number;
		text:string;
	}[];
}  

const Category:React.FC<CategoryProps> = ({ title, works }) => {
	return (
		<Box sx={{
			backgroundColor: '#dfe3e6',
			borderRadius: '5px',
			width: '300px',
			padding: '8px',
			marginRight: '15px',
			minHeight: '130px',
			height: 'auto',
			maxHeight: 'calc(100vh - 160px);',
			// maxHeight: '300px',
			overflow: 'auto'
		}}
		className="scrollBar">
			<h4>{title}</h4>
			{works.map(data => (
				<Work key={data.id} text={data.text} />
			))}
		</Box>
	);
};


export default Category;