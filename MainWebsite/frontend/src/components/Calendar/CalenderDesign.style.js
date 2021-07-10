import styled from 'styled-components';


export const CalendarBody = styled.div`

overflow: hidden;
padding: 10px;

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
        // height: 150px;
      }
      
      
      .react-calendar button {
        padding: 3px 5px;
        font-size: 0.9vw;
        @media(max-width: 1200px){
            font-size: 12px;
          }
          @media(max-width: 900px){
            font-size: 10px;
          }
          @media(max-width: 600px){
            font-size: 8px;
          }
      }
      .react-calendar__month-view__weekdays {
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.9vw;
        @media(max-width: 1200px){
            font-size: 12px;
          }
          @media(max-width: 900px){
            font-size: 10px;
          }
          @media(max-width: 600px){
            font-size: 8px;
          }
      }
      .react-calendar__navigation{
        padding: 10px;
        margin: 0px;
        height: auto;
        @media(max-height: 600px){
          padding: 0px;
        }
      }
      .react-calendar__navigation button {
        padding: 5px 7px;
        font-size: 0.9vw;
        @media(max-width: 1200px){
            font-size: 12px;
            padding: 0px;
            margin: 0px;
            min-height: 20px;
            min-width: 20px;
          }
          @media(max-width: 900px){
            font-size: 10px;
          }
          @media(max-width: 600px){
            font-size: 8px;
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
justify-content: center;
    img{
        width: 10vw;
        margin: auto;
        display: block;
        @media(max-width: 1200px ){
          width: 125px;
          margin: auto;
          margin-bottm: 10px;
          
      }
      @media(max-width: 600px ){
        // width: 100px;
    }
        
    }
`;

export const TimeZonePicker = styled.div`
    color: #fff;
    label{
        padding: 5px 10px;
        text-style: bold;
        font-weight: 700;
        font-size: 1vw;
        @media(max-width: 1200px){
          font-size: 14px;
        }
        @media(max-width: 900px){
          font-size: 12px;
        }
        @media(max-width: 600px){
          font-size: 10px;
        }
    }
    select{
        padding: 5px 10px;
        background: #f0671f;
        color: #fff;
        border: none;
        margin: 5px 7px;
        // color: red;
        font-size: 0.9vw;
        @media(max-width: 1200px){
          font-size: 12px;
        }
        @media(max-width: 900px){
          font-size: 10px;
        }
        @media(max-width: 600px){
          font-size: 8px;
        }

    }
`;