import { Box, List, Paper, Stack, Typography, styled } from "@mui/material";
import Style from './styles/style.js'
import TaskItem from "../TaskItem/index.js";

const TaskTypeHeader = styled(Typography)(({ theme, backgroundColor }) => ({
    fontSize: '1.5rem',
    backgroundColor: theme.palette[backgroundColor].main,
    padding: '0.5rem',
    color: theme.palette.common.white,
    borderRadius: '0.25rem 0.25rem 0 0',
}));

const TaskBlock = ({ ...props }) => {
    const style = Style();

    return (
        <Paper ref={props.taskBlockRef} key={props.id}>
            <Stack>
                <TaskTypeHeader backgroundColor={props.backgroundColor}>{props.taskName}</TaskTypeHeader>
                <List sx={{ ...style.listColor(props.isOver) }}>
                    {props.taskList && props.taskList.length > 0 ?
                        props.taskList.map((task, index) => (
                            <TaskItem
                                key={task.id}
                                task={task}
                                index={index}
                                titleColor={props.backgroundColor}
                            />
                        )) : <Box sx={{ ...style.exptyList }}>
                            <Typography>No Task To Show</Typography>
                        </Box>}
                </List>
            </Stack>
        </Paper>
    )
}

export default TaskBlock;