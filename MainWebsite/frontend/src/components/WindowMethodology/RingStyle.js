import styled from 'styled-components'

export const RingBody = styled.div`
    padding: 25px 0;
    @keyframes animate {
        // 0%   {top: 0px;}
        // 25%  {top: 200px;}
        // 75%  {top: 50px}
        // 100% {top: 100px;}

        0% {transform: rotate(0deg);}
        100% {transform: rotate(360deg);}


      }
      svg{
          height: 1000px;;
          width: 100%;
          font-size: 50px;
          margin: auto;
        //   background: red;
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