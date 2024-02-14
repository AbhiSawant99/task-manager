import { Fragment, useEffect, useState } from "react"
import TaskBlock from "../../materialComponents/TaskBlock";
import { AppContext } from "../../ContextProvider";

const StartedTask = (props) => {
    const { allTask, setAllTask } = AppContext();
    const [startedTaskList, setStartedTaskList] = useState([]);

    useEffect(() => {
        if (allTask && allTask.length > 0) {
            setStartedTaskList(allTask.filter(task => task.category === "Started"));
        }
    }, [allTask])

    const handleClick = (id) => {
        let allTasks = allTask?.length > 0 ? allTask : [];

        const taskIndex = allTasks.findIndex(task => task.id === id)
        let task = allTasks[taskIndex];
        task["category"] = "Completed";

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
                onClick={(id) => handleClick(id)}
            />
        </Fragment>
    )
}

export default StartedTask;