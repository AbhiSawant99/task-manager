import { useTheme } from "@mui/material";

const Style = () => {
    const theme = useTheme();

    const taskHeader = (backgroundColor) => {
        return {
            color: theme.palette[backgroundColor].main,
            padding: '0.375rem',
            borderRadius: '0.5rem 0.5rem 0 0',
            paddingBottom: 0,
        }
    }

    const dragged = (isDragging) => {
        return {
            opacity: isDragging ? 0.25 : 'inherit',
        }
    }

    return {
        task: {
            width: '100%',
            borderRadius: '0.5rem',
            boxShadow: '0',
            backgroundColor: '#f1f1f1',
            '&:hover': {
                cursor: 'pointer',
                boxShadow: '3',
            }
        },
        taskHeader: (backgroundColor) => taskHeader(backgroundColor),
        taskDetails: {
            flexDirection: 'row',
            padding: '0.375rem',
            borderRadius: '0 0 0.5rem 0.5rem',
            paddingTop: 0,
            gap: '0.25rem',
            marginTop: '0.25rem',
        },
        dragged: (isDragging) => dragged(isDragging),
        taskPriority: {
            height: '1.125rem',
            fontSize: '0.6875rem',
        },
    }
}

export default Style;