import { Chip, ListItem, Paper, Stack, Typography } from "@mui/material";
import Style from "./styles/style";
import { useDrag } from "react-dnd";

const TaskItem = ({ task, titleColor, index }) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: "task",
        item: () => ({ ...task, index }),
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const style = Style();

    return (
        <ListItem
            key={task.id}
            ref={dragRef}
        >
            <Paper
                sx={{ ...style.task, ...style.dragged(isDragging) }}
            >
                <Typography sx={{ ...style.taskHeader(titleColor) }}>{task.name}</Typography>
                <Stack sx={{ ...style.taskDetails }}>
                    <Typography variant="caption">Priority: </Typography>
                    <Chip label={task.priority?.label} color={task.priority?.color} variant="outlined" sx={{ ...style.taskPriority }} />
                </Stack>
            </Paper>
        </ListItem>
    )
}

export default TaskItem;