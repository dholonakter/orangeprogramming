import styled from 'styled-components'

export const RingBody = styled.div`
    padding: 25px 0;

      .typing-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
        .input-cursor {
        display: inline-block;
        width: 2px;
        height: 42px;
        background-color: white;
        margin-left: 8px;
  }
  .input-cursor { 
    animation: blink .6s linear infinite alternate;
  }
  @keyframes blink {
    0% {opacity: 1;}
    40% {opacity: 1;}
    60% {opacity: 0;}
    100% {opacity: 0;}
  }
`;


export const OuterRing = styled.div`

// height: 50vh;
// width: 50vh;
// margin: auto;
// border-left: 2px solid red;
// border-right: 2px solid green;
// border-top: 2px solid yellow;
// border-bottom: 2px solid orange;
// text-align: center;
// // background: red;
// transform: translate(0%, 0%);
// border-radius: 30%;
// line-height: 150px;
// // position: absolute;
// // top: 30%;
// // left: 50%;
// // color: #fff;






// &:before{
//     content:'';
//     position: absolute;
//     top: -3px;
//     left: -3px;
//     width: 100%;
//     height: 100%;
//     border: 3px solid transparent;
//     border-top: 3px solid yellow;
//     border-right: 3px solid yellow;
//     border-radius: 50%;
//     // animation: mymove 5s infinite;
// }
// span{
//     display: block;
//     position: absolute;
//     top: calc(50% - 2px);
//     left: 50%;
//     width: 50%;
//     height: 4px;
//     // background: yellow;
//     transform-origin: left;
//     // animation: animate 2s linear infinite;
//     &:before{
//         content: '';
//         position: absolute;
//         width: 16px;
//         height: 16px;
//         border-radius: 50%;
//         background: yellow;
//         top: -6px;
//         right: -8px;
//     }
}
`;

export const Box = styled.div`
      height: 100px;
      width: 100px;
      border: 1px solid green;
      border-radius: 50%;
    //   position: absolute;
    //   top: 38px;
`;