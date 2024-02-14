import React, { Fragment, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button, Typography } from '@mui/material';
import MaterialModal from '../MaterialModal';
import AddNewTask from './addNewTask';

const NavBar = (props) => {

    const [showAddTask, setShowAddTask] = useState(false);

    return (
        <Fragment>
            <AppBar position='sticky'>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Task Manager
                    </Typography>
                    <Button variant="contained" color="info" onClick={() => setShowAddTask(true)}>Add Task</Button>
                </Toolbar>
            </AppBar>
            <MaterialModal
                openModal={showAddTask}
                handleClose={() => setShowAddTask(false)}
                ModalTitle="Add New Task"
                ModalSize="xs"
                paperBackground={true}
                ModalContent={() => <AddNewTask
                    closeModal={() => setShowAddTask(false)}
                />}
            />
        </Fragment>
    )
}

export default NavBar;