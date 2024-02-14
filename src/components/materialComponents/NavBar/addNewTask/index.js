import { Button, Stack, TextField } from "@mui/material";
import { Fragment, useState } from "react";
import { AppContext } from "../../../ContextProvider";

const AddNewTask = ({ ...props }) => {
    const [newTaskDetails, setNewTaskDetails] = useState({});
    const { allTask, setAllTask } = AppContext();
    const [date, setDate] = useState(new Date());

    const handleInputChange = (event) => {
        event.persist();
        setNewTaskDetails(task => ({ ...task, [event.target.name]: event.target.value }))
    }

    const handleDayChange = (dayPickerInput) => {
        setDate(dayPickerInput);
    };

    const handleConfirm = () => {
        let allTasks = allTask?.length > 0 ? allTask : [];

        newTaskDetails["category"] = "Added";
        newTaskDetails["id"] = allTasks.length + 1;

        allTasks.push(newTaskDetails);

        setAllTask([...allTasks]);

        localStorage.setItem('allTask', JSON.stringify(allTasks));

        props.closeModal();
    }

    const disableButton = () => {
        return !(newTaskDetails && newTaskDetails.name && date && newTaskDetails.priority);
    }

    return (
        <Stack sx={{ alignItems: 'center', gap: '1rem' }}>
            <TextField
                onChange={handleInputChange}
                id="task-name"
                label="Task Name"
                name="name"
            />
            <TextField
                onChange={handleInputChange}
                id="task-name"
                label="Priority"
                name="priority"
            />
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