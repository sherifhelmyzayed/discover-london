import * as React from 'react';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    Legend,
} from '@devexpress/dx-react-chart-material-ui';
import {
    LineSeries
} from '@devexpress/dx-react-chart';
import { styled } from '@mui/material/styles';
import { Animation } from '@devexpress/dx-react-chart';
import { Typography } from '@mui/material';

const PREFIX = 'Demo';

const classes = {
    chart: `${PREFIX}-chart`,
};

const format = () => tick => tick;

const Root = props => (
    <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
);
const Label = props => (
    <Legend.Label sx={{ pt: 1, whiteSpace: 'nowrap' }} {...props} />
);
const Item = props => (
    <Legend.Item sx={{ flexDirection: 'column' }} {...props} />
);

const ValueLabel = (props) => {
    const { text } = props;
    return (
        <ValueAxis.Label
            {...props}
            text={`${text}%`}
        />
    );
};


const StyledChart = styled(Chart)(() => ({
    [`&.${classes.chart}`]: {
        paddingRight: '20px',
    },
}));

const StyledCharts = (props) => {
    return (
        <StyledChart
            data={props.data}
            className={classes.chart}
        >
            <ArgumentAxis tickFormat={format} />
            <ValueAxis
                max={50}
                labelComponent={ValueLabel}
            />

            <LineSeries
                name="Your Listing"
                valueField="otherOccupied"
                argumentField="month"
                color="black"
            />
            <LineSeries
                name="Other Listing"
                valueField="occupied"
                argumentField="month"
                color="grey"
            />
            <Legend position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />
            <Typography variant="subtitle2" component="p" marginBottom={2}>
                {(props.stat === 0) 
                ? "Last 7 days"
                : (props.stat === 1)
                ? "last 30 days"
                : "Last Year"
            }
            </Typography>
            <Animation />
        </StyledChart>)
}

export default StyledCharts