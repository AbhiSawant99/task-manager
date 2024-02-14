import React, { Fragment, useEffect } from "react";
import StartedTask from "./startedTask";
import { Box, Grid, Paper, Stack, Typography, styled } from "@mui/material";
import AddedTask from "./addedTask";
import CompletedTask from "./completedTask";
import { AppContext } from "../ContextProvider";

const TaskList = (props) => {

    return (
        <Fragment>
            <Grid container spacing={2} columns={3} sx={{ padding: '0.5rem' }}>
                <Grid item xs={1}>
                    <AddedTask />
                </Grid>
                <Grid item xs={1}>
                    <StartedTask />
                </Grid>
                <Grid item xs={1}>
                    <CompletedTask />
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default TaskList;