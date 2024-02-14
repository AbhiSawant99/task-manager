import { Fragment, useEffect, useState } from "react"
import TaskBlock from "../../materialComponents/TaskBlock";
import { AppContext } from "../../ContextProvider";

const CompletedTask = (props) => {
    const { allTask, setAllTask } = AppContext();
    const [completedTaskList, setCompletedTaskList] = useState([]);

    useEffect(() => {
        if (allTask && allTask.length > 0) {
            setCompletedTaskList(allTask.filter(task => task.category === "Completed"));
        }
    }, [allTask]);

    const handleClick = (id) => {
        let allTasks = allTask?.length > 0 ? allTask : [];

        const taskIndex = allTasks.findIndex(task => task.id === id)
        let task = allTasks[taskIndex];
        task["category"] = "Deleted";

        allTasks[taskIndex] = task;

        setAllTask([...allTasks]);

        setTimeout(() => {
            allTasks.splice(taskIndex, 1);
            setAllTask([...allTasks]);
            localStorage.setItem('allTask', JSON.stringify(allTasks));
        }, 250);
    }


    return (
        <Fragment>
            <TaskBlock
                taskName="Completed Task"
                id={'completedTask'}
                backgroundColor="success"
                taskList={completedTaskList}
                onClick={(id) => handleClick(id)}
            />
        </Fragment>
    )
}

export default CompletedTask;