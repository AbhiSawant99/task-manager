import { Fragment, useEffect, useState } from "react"
import TaskBlock from "../../materialComponents/TaskBlock";
import { AppContext } from "../../contextProvider";
import { useDrop } from "react-dnd";

const CompletedTask = (props) => {
    const { allTask, setAllTask } = AppContext();
    const [completedTaskList, setCompletedTaskList] = useState([]);
    const [{ isOver: taskInCompleted }, completedTaskRef] = useDrop({
        accept: "task",
        drop: (item) => completeTask(item),
        collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    });

    useEffect(() => {
        if (allTask && allTask.length > 0) {
            setCompletedTaskList(allTask.filter(task => task.category === "Completed"));
        }
    }, [allTask]);

    const completeTask = (item) => {
        let allTasks = allTask?.length > 0 ? allTask : [];

        const taskIndex = allTasks.findIndex(task => task.id === item.id)
        let task = allTasks[taskIndex];
        task["category"] = "Completed";

        allTasks[taskIndex] = task;

        setAllTask([...allTasks]);
        localStorage.setItem('allTask', JSON.stringify(allTasks));
    }


    return (
        <Fragment>
            <TaskBlock
                taskName="Completed Task"
                id={'completedTask'}
                backgroundColor="success"
                taskList={completedTaskList}
                taskBlockRef={completedTaskRef}
                isOver={taskInCompleted}
            />
        </Fragment>
    )
}

export default CompletedTask;