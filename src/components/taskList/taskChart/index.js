import React from "react";
import { Box } from "@mui/material";
import { AppContext } from "../../contextProvider";
import Chart from 'react-apexcharts';

import './styles/style.css'

const TaskChart = () => {
    const { allTask } = AppContext();

    const chartData = () => {
        if (allTask && allTask.length > 0) {
            let addedTask = allTask.filter(task => task.category === "Added")?.length;
            let startedTask = allTask.filter(task => task.category === "Started")?.length;
            let comletedTask = allTask.filter(task => task.category === "Completed")?.length;

            return [addedTask, comletedTask, startedTask];
        }
        else {
            return [0, 0, 0]
        }
    }

    return (
        <Box className="ChartBox">
            <Chart
                type="donut"
                width="100%"
                height="100%"
                series={chartData()}
                options={{
                    labels: ['Added', 'Completed', 'Started']
                }}
            />
        </Box>
    )
}

export default TaskChart;