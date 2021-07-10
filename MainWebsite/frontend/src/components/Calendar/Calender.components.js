
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
            <label for="cars">Your Time Zone:</label>

            <select name="time-zone" id="">
            <option value="UTC">UTC 0</option>
                <option value="UTC">UTC +1</option>
                <option value="UTC">UTC +1:30</option>
                <option value="UTC">UTC +2</option>
                <option value="UTC">UTC +2:30</option>
                <option value="UTC">UTC +3</option>
                <option value="UTC">UTC +3:30</option>
                <option value="UTC">UTC +4</option>
                <option value="UTC">UTC +4:30</option>
                <option value="UTC">UTC +5</option>
                <option value="UTC">UTC +5:30</option>
                <option value="UTC">UTC +6</option>
                <option value="UTC">UTC +6:30</option>
                <option value="UTC">UTC +7</option>
                <option value="UTC">UTC +7:30</option>
                <option value="UTC">UTC +8</option>
                <option value="UTC">UTC +8:30</option>
                <option value="UTC">UTC +9</option>
                <option value="UTC">UTC +9:30</option>
                <option value="UTC">UTC +10</option>
                <option value="UTC">UTC +10:30</option>
                <option value="UTC">UTC +11</option>
                <option value="UTC">UTC +11:30</option>
                <option value="UTC">UTC +12</option>
                <option value="UTC">UTC +12:30</option>
                <option value="UTC">UTC -1</option>
                <option value="UTC">UTC -1:30</option>
                <option value="UTC">UTC -2</option>
                <option value="UTC">UTC -2:30</option>
                <option value="UTC">UTC -3</option>
                <option value="UTC">UTC -3:30</option>
                <option value="UTC">UTC -4</option>
                <option value="UTC">UTC -4:30</option>
                <option value="UTC">UTC -5</option>
                <option value="UTC">UTC -5:30</option>
                <option value="UTC">UTC -6</option>
                <option value="UTC">UTC -6:30</option>
                <option value="UTC">UTC -7</option>
                <option value="UTC">UTC -7:30</option>
                <option value="UTC">UTC -8</option>
                <option value="UTC">UTC -8:30</option>
                <option value="UTC">UTC -9</option>
                <option value="UTC">UTC -9:30</option>
                <option value="UTC">UTC -10</option>
                <option value="UTC">UTC -10:30</option>
                <option value="UTC">UTC -11</option>
                <option value="UTC">UTC -11:30</option>
                <option value="UTC">UTC -12</option>
                <option value="UTC">UTC -12:30</option>
                
                
            </select> 
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
