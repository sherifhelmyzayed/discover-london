import Paper from '@mui/material/Paper';
import StyledCharts from './StyledChart';
import CircularProgress from '@mui/material/CircularProgress';


const PerformanceGraph = (props) => {
    const { charData } = props
    return (
        <>
            {(charData) ?
                <Paper>
                    <StyledCharts data={charData} />
                </Paper>
                : <CircularProgress />
            }
        </>
    )
}

export default PerformanceGraph