import * as React from 'react';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
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

// export default class PerformanceGraph extends React.PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data,
//     };
//   }

//   render() {
//     const { data: chartData } = this.state;

//     return (
//       <Paper>
//         <StyledChart
//           data={chartData}
//           className={classes.chart}
//         >
//           <ArgumentAxis tickFormat={format} />
//           <ValueAxis
//             max={50}
//             labelComponent={ValueLabel}
//           />

//           <LineSeries
//             name="TV news"
//             valueField="tvNews"
//             argumentField="year"
//           />
//           <LineSeries
//             name="Church"
//             valueField="church"
//             argumentField="year"
//           />
//           <LineSeries
//             name="Military"
//             valueField="military"
//             argumentField="year"
//           />
//           <Legend position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />
//           <Title
//             text={`Confidence in Institutions in American society ${'\n'}(Great deal)`}
//             textComponent={TitleText}
//           />
//           <Animation />
//         </StyledChart>
//       </Paper>
//     );
//   }
// }

const PerformanceGraph = () => {
    const [charData] = useState(data)
    return (
        <Paper>
            <StyledChart
                data={charData}
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
                {/* <HoverState
                    hover={target}
                    onHoverChange={changeHover()}
                />
                <Tooltip
                    targetItem={target}
                    contentComponent={TooltipContent()}
                /> */}
                <Animation />
            </StyledChart>
        </Paper>

    )
}

export default PerformanceGraph