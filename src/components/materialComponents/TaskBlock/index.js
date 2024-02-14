import { Fragment, forwardRef, useRef } from "react"
import { Box, Divider, List, ListItem, Paper, Stack, Typography, styled } from "@mui/material";
import Style from './style.js'


const TaskTypeHeader = styled(Typography)(({ theme, backgroundColor }) => ({
    fontSize: '1.5rem',
    backgroundColor: theme.palette[backgroundColor].main,
    padding: '0.5rem',
    color: theme.palette.common.white,
    borderRadius: '0.25rem 0.25rem 0 0',
}));

const Task = styled(Paper)(({ theme }) => ({

}))

const TaskBlock = ({ ...props }) => {
    const style = Style();

    const onDragEnd = (result) => {
        console.log(result);
    }

    return (
        <Paper>
            <Stack>
                <TaskTypeHeader backgroundColor={props.backgroundColor}>{props.taskName}</TaskTypeHeader>
                <Stack alignItems="center">
                    {props.taskList && props.taskList.length > 0 ?
                        props.taskList.map((task, index) => (
                            <Paper
                                sx={{ ...style.task }}
                                onClick={() => props.onClick(task.id)}
                                key={task.id}
                            >
                                <Typography sx={{ ...style.taskHeader(props.backgroundColor) }}>{task.name}</Typography>
                                <Stack sx={{ ...style.taskDetails }}>
                                    <Typography variant="caption">Priority: {task.priority}</Typography>
                                </Stack>
                            </Paper>
                        )) : <Box sx={{ ...style.exptyList }}>
                            <Typography>No Task To Show</Typography>
                        </Box>}
                </Stack>
            </Stack>
        </Paper>
    )
}

export default TaskBlock;