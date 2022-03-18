import * as React from 'react';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    // LineSeries,
    Title,
    Legend,
} from '@devexpress/dx-react-chart-material-ui';
import {
    LineSeries
} from '@devexpress/dx-react-chart';
import { styled } from '@mui/material/styles';
import { Animation, HoverState } from '@devexpress/dx-react-chart';
// import { confidence as data } from '../../../demo-data/data-vizualization';
import { summery as data } from '../../shared/Data';
import { Tooltip } from '@mui/material';

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

const TitleText = props => (
    <Title.Text {...props} sx={{ whiteSpace: 'pre' }} />
);

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
            <Title
                text={`Performance ${'\n'}(Last 10 months)`}
                textComponent={TitleText}
            />
            <Animation />
        </StyledChart>)
}

export default StyledCharts