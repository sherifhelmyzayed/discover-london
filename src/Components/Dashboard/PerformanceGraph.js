import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { summery as data } from '../../shared/Data';
import StyledCharts from './StyledChart';







const PerformanceGraph = (props) => {
    const {charData} = props
    const [charDatas, setCharData] = useState(data)


    useEffect(()=>{
        console.log(data)
        if(charData) {
            setCharData(charData)
            console.log(charDatas)
        }
    },[charDatas])
    return (
        <Paper>
            <StyledCharts data={data}/>
        </Paper>

    )
}

export default PerformanceGraph