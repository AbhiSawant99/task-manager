import { Box, Button, Chip, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { AppContext } from "../../../contextProvider";

const AddNewTask = ({ ...props }) => {
    const [newTaskDetails, setNewTaskDetails] = useState({});
    const [selectedPriority, setSelectedPriority] = useState(null);
    const { allTask, setAllTask } = AppContext();

    const priorityTypes = [
        {
            id: 'low',
            label: 'Low',
            color: 'primary'
        },
        {
            id: 'midium',
            label: 'Medium',
            color: 'warning'
        },
        {
            id: 'High',
            label: 'High',
            color: 'error'
        },

    ]

    const handleInputChange = (event) => {
        event.persist();
        setNewTaskDetails(task => ({ ...task, [event.target.name]: event.target.value }))
    }

    const handleConfirm = () => {
        let allTasks = allTask?.length > 0 ? allTask : [];

        newTaskDetails["category"] = "Added";
        newTaskDetails["priority"] = selectedPriority;
        newTaskDetails["id"] = allTasks.length + 1;

        allTasks.push(newTaskDetails);

        setAllTask([...allTasks]);

        localStorage.setItem('allTask', JSON.stringify(allTasks));

        props.closeModal();
    }

    const disableButton = () => {
        return !(newTaskDetails && newTaskDetails.name && selectedPriority?.id);
    }

    return (
        <Stack sx={{ alignItems: 'center', gap: '1rem' }}>
            <TextField
                onChange={handleInputChange}
                id="task-name"
                label="Task Name"
                name="name"
            />
            <Box>
                <Typography>Select Priority</Typography>
                <Stack sx={{ flexDirection: 'row', gap: '0.5rem', marginTop: '0.25rem' }}>
                    {priorityTypes.map((priority, index) => (
                        <Chip label={priority.label}
                            color={priority.color}
                            variant={selectedPriority?.id === priority?.id ? "filled" : "outlined"}
                            key={priority.id}
                            onClick={() => setSelectedPriority(priority)}
                        />
                    ))}
                </Stack>
            </Box>
            <Button
                variant="contained"
                color="success"
                onClick={handleConfirm}
                disabled={disableButton()}
            >Add Task</Button>
        </Stack>
    )
}

export default AddNewTask;