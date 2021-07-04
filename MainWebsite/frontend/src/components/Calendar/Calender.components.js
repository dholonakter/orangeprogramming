
import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CalendarBody, LogoHolder, TimeZonePicker } from './CalenderDesign.style';
import Ab from '../../assets/images/ScaleUp/appintment.png'
import Logo from '../../assets/images/logo.png'

import SelectTimezoneMaterialUi from 'input-material-ui';


export default function Calender() {
    
    const [value, onChange] = useState(new Date());
    
    return (
        <div>
            <CalendarBody>
            <LogoHolder>
                <img src={Logo}/>
            </LogoHolder>
            <br/>
            <TimeZonePicker>
            <SelectTimezoneMaterialUi
          label="Timezone"
          helperText="Please select a timezone from the list"
          onChange={onChange}
        />
            </TimeZonePicker>
                <Calendar
                    className="cal"
                    onChange={onChange}
                    value={value}
                />
            </CalendarBody>
            
        </div>
    )
}
