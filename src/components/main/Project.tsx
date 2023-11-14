import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState, useEffect } from "react";
import Category from "./Category";
import { Box } from "@mui/material";
import { CategoryType } from "src/common/commonTypes";
import { getProjectCategorys } from "../../actions/projectAction";
import Grid from '@mui/material/Grid';

interface ProjectProps {
    projectName: string;
    projectId: number;
} 

const Project:React.FC<ProjectProps> = ({projectId}) => {

    const [categorys, setCategorys] = useState<CategoryType[]>([]);

    useEffect(() => {
        getProjectCategorys(projectId)
        .then((res) => {
            setCategorys(res);
        }) 
        .catch((err) => {
            console.log(err);
        });
    }, [projectId]);
    

    // const list:CategoryType[] = [
    //     {
    //         title: '카테고리1',
    //         id: 0,
    //         works: [
    //             { id: 0, text: '테스트111111' },
    //             { id: 1, text: '테스트22222' }
    //         ]
    //     },
    //     {
    //         title: '카테고리2',
    //         id: 1,
    //         works: [
    //             { id: 2, text: '테스트3333' },
    //             { id: 3, text: '테스트5324234' },
    //             { id: 4, text: 'ㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ' },
    //             { id: 5, text: 'ㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ' }
    //         ]
    //     }
    // ];


    return (
        <Grid container className="scrollBar" sx={{padding: '20px', overflowX: 'auto', flexWrap: 'nowrap', height: 'calc(100vh - 120px)'}}>
            {categorys.map(data => (
                <Grid item>
                    <Category key={data.id} title={data.title} works={data.works} />
                </Grid>
            ))}
        </Grid>
        // <Box sx={{padding: '20px'}}>
        //     <Box sx={{display: 'flex'}}>
        //     {categorys.map(data => (
        //             <Category key={data.id} title={data.title} works={data.works} />
        //         ))}
        //     </Box>
        // </Box>
    )
}

export default Project