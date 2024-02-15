import { Box, Chip, ListItem, Paper, Stack, Typography } from "@mui/material";
import Style from "./styles/style";
import { useDrag } from "react-dnd";
import { AppContext } from "../../contextProvider";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import IconButton from '@mui/material/IconButton';

const TaskItem = ({ task, titleColor, index }) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: "task",
        item: () => ({ ...task, index }),
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const style = Style();
    const { allTask, setAllTask } = AppContext();

    const deleteTask = (id) => {
        let allTasks = allTask?.length > 0 ? allTask : [];

        const taskIndex = allTasks.findIndex(task => task.id === id)
        let taskToDelete = allTasks[taskIndex];
        taskToDelete["category"] = "Deleted";

        allTasks[taskIndex] = taskToDelete;

        setAllTask([...allTasks]);

        setTimeout(() => {
            allTasks.splice(taskIndex, 1);
            setAllTask([...allTasks]);
            localStorage.setItem('allTask', JSON.stringify(allTasks));
        }, 250);
    }

    return (
        <ListItem
            key={task.id}
            ref={dragRef}
        >
            <Paper
                sx={{ ...style.task, ...style.dragged(isDragging) }}
            >
                <Box>
                    <Typography sx={{ ...style.taskHeader(titleColor) }}>{task.name}</Typography>
                    <Stack sx={{ ...style.taskDetails }}>
                        <Typography variant="caption">Priority: </Typography>
                        <Chip
                            label={task.priority?.label}
                            color={task.priority?.color}
                            variant="outlined"
                            sx={{ ...style.taskPriority }}
                        />
                    </Stack>
                </Box>
                <IconButton aria-label="delete" color="error" onClick={() => deleteTask(task.id)}>
                    <RemoveCircleOutlineIcon />
                </IconButton>
            </Paper>
        </ListItem>
    )
}

export default TaskItem;