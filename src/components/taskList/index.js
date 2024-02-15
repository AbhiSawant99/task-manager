import React, { Fragment } from "react";
import StartedTask from "./startedTask";
import { Grid } from "@mui/material";
import AddedTask from "./addedTask";
import CompletedTask from "./completedTask";
import Style from "./styles/style"

const TaskList = (props) => {
    const style = Style();

    return (
        <Fragment>
            <Grid container spacing={2} columns={3} sx={{ ...style.TaskContainer }}>
                <Grid item xs={3} sm={1}>
                    <AddedTask />
                </Grid>
                <Grid item xs={3} sm={1}>
                    <StartedTask />
                </Grid>
                <Grid item xs={3} sm={1}>
                    <CompletedTask />
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default TaskList;