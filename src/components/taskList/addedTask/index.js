import { Fragment, useEffect, useState } from "react"
import TaskBlock from "../../materialComponents/TaskBlock";
import { AppContext } from "../../contextProvider";
import { useDrop } from "react-dnd";

const AddedTask = (props) => {
    const { allTask, setAllTask } = AppContext();
    const [addedTaskList, setAddedTaskList] = useState([]);
    const [{ isOver }, addedTaskRef] = useDrop({
        accept: "task",
        drop: (item) => addAddedTask(item),
        collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    });

    useEffect(() => {
        if (allTask && allTask.length > 0) {
            setAddedTaskList(allTask.filter(task => task.category === "Added"));
        }
    }, [allTask])

    const addAddedTask = (item) => {
        let allTasks = allTask?.length > 0 ? allTask : [];

        const taskIndex = allTasks.findIndex(task => task.id === item.id);
        let task = allTasks[taskIndex];
        task["category"] = "Added";

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
                taskBlockRef={addedTaskRef}
                isOver={isOver}
            />
        </Fragment>
    )
}

export default AddedTask;