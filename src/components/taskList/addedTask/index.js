import { Fragment, useEffect, useState } from "react"
import TaskBlock from "../../materialComponents/TaskBlock";
import { AppContext } from "../../ContextProvider";
import { Box } from "@mui/material";

const AddedTask = (props) => {
    const { allTask, setAllTask } = AppContext();
    const [addedTaskList, setAddedTaskList] = useState([]);

    useEffect(() => {
        if (allTask && allTask.length > 0) {
            setAddedTaskList(allTask.filter(task => task.category === "Added"));
        }
    }, [allTask])

    const handleClick = (id) => {
        let allTasks = allTask?.length > 0 ? allTask : [];

        const taskIndex = allTasks.findIndex(task => task.id === id)
        let task = allTasks[taskIndex];
        task["category"] = "Started";

        allTasks[taskIndex] = task;

        setAllTask([...allTasks]);
        localStorage.setItem('allTask', JSON.stringify(allTasks));
    }

    return (
        <Fragment>
            <TaskBlock
                taskName="Added Task"
                id='addedTask'
                backgroundColor="primary"
                taskList={addedTaskList}
                onClick={(id) => handleClick(id)}
            />
        </Fragment>
    )
}

export default AddedTask;