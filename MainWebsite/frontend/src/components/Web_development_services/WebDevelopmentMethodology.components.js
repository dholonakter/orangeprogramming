import { Box, Grid, makeStyles, Typography, Container } from '@material-ui/core';
import React, { useState } from 'react';
import BorderAllIcon from '@material-ui/icons/BorderAll';
import BuildIcon from '@material-ui/icons/Build';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import CodeIcon from '@material-ui/icons/Code';
import LockIcon from '@material-ui/icons/Lock';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import { Root, RootO, IconBox } from "./Style/WebDevelopmentMethodology.style";
import img1 from './Images/Method_Image/img1.jpeg';
import img2 from './Images/Method_Image/img2.jpeg';
import img3 from './Images/Method_Image/img3.jpeg';
import img4 from './Images/Method_Image/img4.jpeg';
import img5 from './Images/Method_Image/img5.jpeg';
import img6 from './Images/Method_Image/img6.jpeg';
import ReactDom from 'react-dom';


const WebDevelopmentMethodology = () => {

   

    const [methodData, setMethodData] = useState([
        {
            name: 'Goals',
            logo: <BorderAllIcon/>,
            text: "Defininging site goatlsof Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words et",
            photo: img1,
            id:'1',
            isActive: true
            

        },
        {
            name: 'Strategy',
            logo:  <BuildIcon/>,
            text: "Defininging site goatlsof Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words et",
            photo: img2,
            id:'2',
            isActive: false

            
        },
        {
            name: 'Design',
            logo:  <CropOriginalIcon/>,
            text: "Defininging site goatlsof Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words et",
            photo: img3,
            id:'3',
            isActive: false
        },
        {
            name: 'Development',
            logo: <CodeIcon/>,
            text: "Defininging site goatlsof Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words et",
            photo: img4,
            id:'4',
            isActive: false
        },
        {
            name: 'Quality',
            logo: <LockIcon/>,
            text: "Defininging site goatlsof Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words et",
            photo: img5,
            id:'5',
            isActive: false
            
        },
        {
            name: 'Delivery',
            logo: <MergeTypeIcon/>,
            text: "Defininging site goatlsof Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words et",
            photo: img6,
            id:'6',
            isActive: false
            
        },
       
    ]);

    function makingActive(id){
        var i = 1;
        var j = 6;
        for( i = 1; i <= j; i++){
            if(parseInt(id) == i){
                var index = methodData.findIndex(x =>x.id === i.toString());
                let g = methodData[index];
                g['isActive'] = true;
        
                setMethodData([
                    ...methodData.slice(0,index),
                    g,
                    ...methodData.slice(index+1)
                  ]
                          );
            }else{

                var index = methodData.findIndex(x =>x.id === i.toString());
                let g = methodData[index];
                g['isActive'] = false;
        
                setMethodData([
                    ...methodData.slice(0,index),
                    g,
                    ...methodData.slice(index+1)
                  ]
              );
            }

        }
    }
  

    const doThis = (getName,getText,getPhoto,id) => {
        setDetailsData({name:getName,text:getText, photo:getPhoto});
        makingActive(id); 
        var ab = document.getElementById(id).innerHTML;

         alert(ab)
        // console.log(ab);


        // var i = 1;
        // for (let i = 1; i < 7; i++) {
        //     // const element = array[i];
        //     if(i == id){
        //         var cont = document.getElementById(id);
        //         ReactDom.findDOMNode(cont).style.background = "red";
        //     }else{
        //         var cont = document.getElementById(i);
        //         ReactDom.findDOMNode(cont).style.background = "#fff"
        //     }
            
        // }
      
    }

  
    // var slideIndex = 0;
    // const anotherDothis = () => {
    //     slideIndex++;
 
    //     if(slideIndex > 6){
    //         slideIndex = 0
    //     }

    //     for (let i = 1; i < 7; i++) {
    //         // const element = array[i];
    //         if(i == slideIndex){
    //             var cont = document.getElementById(slideIndex);
    //             // ReactDom.findDOMNode(cont).style.background = "red";
    //         }else{
    //             var cont = document.getElementById(i);
    //             // ReactDom.findDOMNode(cont).style.background = "#fff"
    //         }
            
    //     }
    //     // setTimeout(anotherDothis, 2000)


    // }


    // anotherDothis();

    // function task(i) {
    //     setTimeout(function() {
    //         console.log(i);
    //     }, 2000 * i);
    //   }


    

// var slideIndex = 0;

// function od(){
//     var i;
  
//     var dots = document.getElementsByClassName('gridItem');
 
//     // slideIndex++;
 
//     if(slideIndex >= dots.length){slideIndex = 0}




//     // var container = document.getElementById(slideIndex);
//     // ReactDOM.findDOMNode(container).style.background="red";

//     // reactDom.findDOMNode(container).style.background = 'red';
    
   

//     // for (i = 1; i < 7; i++) {
        
//         // if(i != slideIndex){
//             // var container = document.getElementById(i);
//             // ReactDOM.findDOMNode(container).style.background="#fff";




//         // }
        
//         // setDetailsData({
//         //     name:methodData[slideIndex]['name'],
//         //     text:methodData[slideIndex]['text'], 
//         //     photo:methodData[slideIndex]['photo']
//         // });

        
//     //   }
    
     
   
//     setTimeout(od, 2000)

// }


// function dog(){
//     alert(document.getElementById(3))
//     // if()
// }

    const [detailsData, setDetailsData] = useState({
        name: methodData[0]["name"],
        text: methodData[0]["text"],
        photo: methodData[0]["photo"],
    });
    // od();
    return (
        
        <div >
            <Root>
                <Container maxWidth='lg'>
                    <Typography align="center" display="block" variant="h3"> web development methodology </Typography>
                      <Grid className='gridContainer' id='myId' container>
                      
                            {methodData.map(item=>(
                                <Grid key={item.id} className='gridItem' item sm={2}>
                                    
                                    <IconBox  id={item.id}   style={{background: item.isActive?'rgb(191, 191, 255)':'#fff'}} key={item.id} onClick={() => doThis(item.name, item.text, item.photo, item.id)}> 
                                        <div className='logoHolder'>
                                            {item.logo} 
                                           
                                        </div>
                                    </IconBox>
                                    <Typography  align="center" color="textSecondary" variant="body2" style={{padding: '7px 0 0 0'}}> {item.name} </Typography>
                                </Grid>
                            ))}   



                       

                        </Grid>  
                </Container>
            </Root>

            <RootO>
                <Container >
                    <Grid container>
                        <Grid item sm={6}>
                            <Typography   align="left" variant="h4"> {detailsData.name} </Typography>
                            <Typography  align="justify" variant="body2">  {detailsData.text}  </Typography>
                        </Grid>
                        <Grid className='right' item sm={6}>
                            <div className='computerBody'>
                                <div className='computerScreen'>
                                    <div className='computerPlayer'>
                                        <img className='computerPlayerContent' src={detailsData.photo}></img>
                                        
                                    </div>
                                    <div className='computerKey'></div>
                                </div>
                            </div> 
                        </Grid>

                    </Grid>
                </Container>
            </RootO>
        </div>
        
    );
};

export default WebDevelopmentMethodology;