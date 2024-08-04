import React, { Fragment } from "react";
import { Grid } from "@mui/material";
import Style from "./styles/style";
import TaskChart from "./taskChart";
import { AppContext } from "../ContextProvider";
import { useDrop } from "react-dnd";
import TaskBlock from "../materialComponents/TaskBlock";

const TaskList = (props) => {
    const { allTask, setAllTask } = AppContext();
    const style = Style();

    const [{ isOver: taskInAdded }, addedTaskRef] = useDrop({
        accept: "task",
        drop: (item) => addTaskInList(item, "Added"),
        collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    });

    const [{ isOver: taskInStarted }, startedTaskRef] = useDrop({
        accept: "task",
        drop: (item) => addTaskInList(item, "Started"),
        collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    });

    const [{ isOver: taskInCompleted }, completedTaskRef] = useDrop({
        accept: "task",
        drop: (item) => addTaskInList(item, "Completed"),
        collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    });

    const taskHeader = [
        {
            taskName: "Added Task",
            id: 'addedTask',
            type: "Added",
            backgroundColor: "primary",
            taskBlockRef: addedTaskRef,
            isOver: taskInAdded,
        },
        {
            taskName: "AddedTask",
            id: 'startedTask',
            type: "Started",
            backgroundColor: "warning",
            taskBlockRef: startedTaskRef,
            isOver: taskInStarted
        },
        {
            taskName: "Completed Task",
            id: 'completedTask',
            type: "Completed",
            backgroundColor: "success",
            taskBlockRef: completedTaskRef,
            isOver: taskInCompleted,
        },
    ]

    const getTaskList = (taskType) => {
        if (allTask && allTask.length > 0) {
            return allTask.filter(task => task.category === taskType);
        }
    }

    const addTaskInList = (item, taskType) => {
        let allTasks = allTask?.length > 0 ? allTask : [];

        const taskIndex = allTasks.findIndex(task => task.id === item.id);
        let task = allTasks[taskIndex];
        task["category"] = taskType;

        allTasks[taskIndex] = task;

        setAllTask([...allTasks]);
        localStorage.setItem('allTask', JSON.stringify(allTasks));
    }

    return (
        <Fragment>
            <Grid container spacing={2} columns={4} sx={{ ...style.TaskContainer }}>
                {taskHeader.map((task, index) => (
                    <Grid key={index} item xs={3} sm={1}>
                        <TaskBlock
                            taskName={task.taskName}
                            id={task.id}
                            backgroundColor={task.backgroundColor}
                            taskList={getTaskList(task.type)}
                            taskBlockRef={task.taskBlockRef}
                            isOver={task.isOver}
                        />
                    </Grid>
                ))}
                <Grid item xs={3} sm={1}>
                    <TaskChart />
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default TaskList;