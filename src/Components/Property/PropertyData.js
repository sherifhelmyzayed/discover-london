import React from 'react'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import RoomServiceOutlinedIcon from '@mui/icons-material/RoomServiceOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
export default function PropertyData() {
    return (
        <>
            <div className="data-section">

                <div className="data-holder">
                    <div className='data'>

                        <div className='data-icon-container'>
                            <WorkspacePremiumIcon />
                        </div>
                        <div className='data-title-container'>
                            <h6 className="data-section-titles">DANIEL IS A SUPERHOST</h6>
                        </div>
                    </div>
                    <div>
                        <p className='data-static-info'>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
                    </div>
                </div>
                <div className="data-holder">
                    <div className='data'>

                        <div className='data-icon-container'>
                            <RoomServiceOutlinedIcon />
                        </div>
                        <div className='data-title-container'>
                            <h6 className="data-section-titles">STAFF & SERVIC INCLUDED</h6>
                        </div>
                    </div>
                    <div>
                        <p className='data-static-info'>24 Hours staff & services & Housekeeping - daily</p>
                    </div>
                </div>
                <div className="data-holder">
                    <div className='data'>

                        <div className='data-icon-container'>
                            <CalendarMonthIcon />
                        </div>
                        <div className='data-title-container'>
                            <h6 className="data-section-titles">Free cancellation</h6>
                        </div>
                    </div>
                    <div>
                        <p className='data-static-info'>Qualified for free cancellation & no-fee change options , It may take up to 48 hours to receive your refund.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
