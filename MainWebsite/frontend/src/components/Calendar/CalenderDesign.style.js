import styled from 'styled-components';


export const CalendarBody = styled.div`

overflow: hidden;
padding: 25px;

    background: #445678;
    .cal{
        button{
            background: none;
        }
    }

    
    .react-calendar {
        background: #445678;
        border: 1px solid #445678;
        color: #fff;
        width: 100%;
      }
      
      
      .react-calendar button {
        padding: 3px 5px;
      }
     
     
      .react-calendar__navigation button {
        padding: 5px 7px;
        span{
            font-size: 15px;
        }
      }
      .react-calendar__navigation button:enabled:hover,
      .react-calendar__navigation button:enabled:focus {
        // background-color: #e6e6e6;
      }
      
      .react-calendar__month-view__days__day--weekend {
        color: #d10000;
        &:hover{
            color: #445678;
        }
      }
      .react-calendar__month-view__days__day--neighboringMonth {
        color: #757575;
      }
      .react-calendar__tile:enabled:hover,
      .react-calendar__tile:enabled:focus {
        background: #f0671f;
      }
     
      .react-calendar__tile--now:enabled:hover,
      .react-calendar__tile--now:enabled:focus {
        background: #ffffa9;
      }
      .react-calendar__tile--hasActive {
        background: #76baff;

      }
      .react-calendar__tile--hasActive:enabled:hover,
      .react-calendar__tile--hasActive:enabled:focus {
        background: #a9d4ff;

      }
      .react-calendar__tile--active {
        background: #f0671f;
        border-radius: 50%;
        color: #fff;
      }
      .react-calendar__tile--active:enabled:hover,
      .react-calendar__tile--active:enabled:focus {
        background: #1087ff;
      }
      .react-calendar--selectRange .react-calendar__tile--hover {
        background-color: #e6e6e6;
      }

     
`;

export const LogoHolder = styled.div`
    img{
        width: 100%;
        
    }
`;

export const TimeZonePicker = styled.div`
    color: #fff;
    label{
        padding: 5px 10px;
        text-style: bold;
        font-weight: 700;
    }
    select{
        padding: 5px 10px;
        background: #f0671f;
        color: #fff;
        border: none;
        margin: 5px 7px;
        // color: red;

    }
`;