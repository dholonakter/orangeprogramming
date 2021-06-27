import styled from 'styled-components'



export const Card1 = styled.div`



.card {
    cursor: pointer;
    position: relative;
    width: 90%;
    height: 40vh;
    background: #000;
    margin: auto;
    @media(max-width: 1500px){
      height: 320px;
      width: 95%;
    }
    @media(max-width: 850px){
      height: 280px;
      width: 95%;
    }
    @media (max-width: 500px) {
      height: 250px;
      width: 80%;
    }

}
.card .image {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.card .image img {
    width: 100%;
    height: 100%;
    transition: .5s;
}
.card:hover .image img {
    opacity: .5;
    transform: translateX(40%);/*100%*/
}
.card .details {
    position: absolute;
    top: 0;
    left: 0;
    width: 70%;/*100%*/
    height: 100%;
    background: #F0671F;
    transition: .5s;
    transform-origin: left;
    transform: perspective(2000px) rotateY(-90deg);
}
.card:hover .details {
    transform: perspective(2000px) rotateY(0deg);
}
.card .details .center {
    padding: 20px;
    text-align: center;
    background: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.card .details .center h1 {
    margin: 0;
    padding: 0;
    color: #F0671F;
    line-height: 1vw;
    text-transform: uppercase;
    font-size: 1vw;
      @media (max-width: 1000px) {
        font-size: 10px;
        line-height: 10px;
      }
      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 14px;
      }
     
}

.card .details .center p {
    margin: 10px 0;
    padding: 0;
    color: #262626;
    font-size: 0.8vw;
    @media (max-width: 1000px) {
      font-size: 0.9vw;
    }
    @media (max-width: 800px) {
      font-size: 10px;
    }
}
.card .details .center ul {
    margin: 10px auto 0;
    padding: 0;
    display: table;
}
.card .details .center ul li {
    list-style: none;
    margin: 0 5px;
    float: left;
}
.card .details .center ul li a {
    display: block;
    background: #262626;
    color: #fff;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    transform: .5s;
}
.card .details .center ul li a:hover {
    background: #ff3636;
}
button{
    color: #F0671F;
    padding: 5px 12px;
    font-size: 15px;
    font-weight: 500;
    border: 1px solid #F0671F;
    &:hover{
        color: #fff;
        background: #F0671F;
        transition: .3s;
    }
}
`;


