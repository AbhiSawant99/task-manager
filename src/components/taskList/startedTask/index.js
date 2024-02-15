import { Fragment, useEffect, useState } from "react"
import TaskBlock from "../../materialComponents/TaskBlock";
import { AppContext } from "../../contextProvider";
import { useDrop } from "react-dnd";

const StartedTask = (props) => {
    const { allTask, setAllTask } = AppContext();
    const [startedTaskList, setStartedTaskList] = useState([]);
    const [{ isOver: taskInStarted }, startedTaskRef] = useDrop({
        accept: "task",
        drop: (item) => addStartTask(item),
        collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    });

    useEffect(() => {
        if (allTask && allTask.length > 0) {
            setStartedTaskList(allTask.filter(task => task.category === "Started"));
        }
    }, [allTask])

    const addStartTask = (item) => {
        let allTasks = allTask?.length > 0 ? allTask : [];

        const taskIndex = allTasks.findIndex(task => task.id === item.id);
        let task = allTasks[taskIndex];
        task["category"] = "Started";

        allTasks[taskIndex] = task;

        setAllTask([...allTasks]);
        localStorage.setItem('allTask', JSON.stringify(allTasks));
    }

    return (
        <Fragment>
            <TaskBlock
                taskName="Started Tasks"
                id={'startedTask'}
                backgroundColor="warning"
                taskList={startedTaskList}
                taskBlockRef={startedTaskRef}
                isOver={taskInStarted}
            />
        </Fragment>
    )
}

export default StartedTask;