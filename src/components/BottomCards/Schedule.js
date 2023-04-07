import React from 'react'
import {ReactComponent as RightCaret} from './../../assets/images/right-caret.svg'
const Schedule = () => {
    const schedules = [
        {
            title: 'Meeting with suppliers from Kuta Bali',
            time: '14.00-15.00',
            location: 'at Sunset Road, Kuta, Bali ',
            color: '#9BDD7C'
        },

        {
            title: 'Check operation at Giga Factory 1',
            time: '18.00-20.00',
            location: 'at Central Jakarta ',
            color: '#6972C3'
        },

    ]
    return (
        <div className="bottom_card">
            <div className="schedule__title--flex">
                <div className="card__title card__title--flex">
                    <div className="card__title__left">
                        Top products
                    </div>
                    <div className="linegraph__daterange card__title__right">
                        <span className='text-light-schedule' id="schedule" style={{ border: '0',}}>
                            View all <span className='pl-2'> <RightCaret/> </span>
                        </span>
                    </div>
                </div>
            </div>
            {schedules.map(
                (item, index) => {
                    return <div className="schedule-card" key={index}>
                        <div className="colorline" style={{ backgroundColor: item.color }}></div>
                        <div className='schedule-card__container'>
                            <div className="schedule-card__title">
                                {item.title}
                            </div>
                            <div className="schedule-card__time">
                                {item.time}
                            </div>
                            <div className="schedule-card__location">
                                {item.location}
                            </div>
                        </div>
                    </div>
                }
            )
            }
        </div>
    )
}

export default Schedule