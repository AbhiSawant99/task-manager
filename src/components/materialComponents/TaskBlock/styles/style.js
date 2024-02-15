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

    const listColor = (isOver) => {
        return {
            opacity: isOver ? 0.25 : 'inherit',
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
            padding: '0.375rem',
            borderRadius: '0 0 0.5rem 0.5rem',
            paddingTop: 0,
        },
        exptyList: {
            backgroundColor: '#f1f1f1',
            textAlign: 'center',
            margin: '0.5rem',
            borderRadius: '0.5rem',
        },
        listColor: (isOver) => listColor(isOver),
    }
}

export default Style;