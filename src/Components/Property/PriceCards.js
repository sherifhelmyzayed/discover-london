import React from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';


export default function PriceCard() {
    return (

        <div className='info-card'>

            <div className='price-area'>
                <div><span className='price-tag'>$850</span><span className='per-night'>&nbsp;/ night</span></div>
                <div>
                    <Tooltip title="Contact the host">
                        <IconButton>
                            <ChatBubbleOutlineOutlinedIcon />
                        </IconButton>

                    </Tooltip>
                </div>
            </div>
            <div className='reservation-info'>
                <div className='check-time'>
                    <div className='check-in'>
                        <p className='title-res-info'>CHECK-IN</p>
                        <p className='data-res-info'>3/20/2022</p>
                    </div>
                    <div className='border'></div>
                    <div className='check-out'>
                        <p className='title-res-info'>CHECK-OUT</p>
                        <p className='data-res-info'>3/27/2022</p>
                    </div>
                </div>
                <div className='guests-number'>
                    <div>

                        <p className='title-res-info'>GUESTS</p>
                        <p className='data-res-info'>1 guest</p>
                    </div>
                    <div>
                        <IconButton>

                            <KeyboardArrowDownOutlinedIcon />
                        </IconButton>

                    </div>

                </div>
                <div>
                    <div className='reservation-area'>

                        <button className='reserve'>
                            RESERVE
                        </button>
                        <p><span className='per-night'>You won't be charged yet</span></p>
                    </div>
                    <div className="price-total">
                        <p>850$ × 7 Nights</p>
                        <p>$5950</p>
                    </div>
                </div>

            </div>
        </div>
    )
}