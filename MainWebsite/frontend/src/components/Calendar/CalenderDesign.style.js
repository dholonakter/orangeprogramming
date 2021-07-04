import styled from 'styled-components';


export const CalendarBody = styled.div`

width: 400px;
overflow: hidden;
padding: 25px;

    background: #445678;
    .cal{
        // color: red;
        // background: red;
    }

    .react-calendar{
        background: #445678;
        border: 1px solid #445678;
        color: #fff;
        width: 100%;
    }
    .react-calendar button{
        color: #5D6A81;
    }
    .react-calendar__navigation button{
        color: #fff;
    }
    .react-calendar__tile--active {
        background: #f0671f;
        border-radius: 50%;
        color: #fff;
      }
`;

export const LogoHolder = styled.div`
    // height: 100px;
    img{
        width: 100%;
        
    }
`;

export const TimeZonePicker = styled.div`

`;