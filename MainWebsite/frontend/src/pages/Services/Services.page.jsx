import React, { Component, useState } from 'react';
import Banner from "../../components/Web_development_services/WebDevelopmentBanner.component";
import Description from "../../components/Web_development_services/WebDevelopmentDescription.components";
import Methodology from "../../components/Web_development_services/WebDevelopmentMethodology.components";
import {Data} from '../../assets/Data/MyData'
import { useLocation } from 'react-router';




export default function Services() {

    // const {pathName} = useLocation()

    const PageLoader = () =>{

        var URLToken = new URLSearchParams(useLocation().search);

        var pageName = URLToken.get("services")

        var i = 0;
        // let presentPage = Data[0][0].page_link;

        while(i < Data.length){
            let presentPage = Data[i][0].page_link;
            if(presentPage == pageName){

                return i
            }
            i++;
        }

        // alert(presentPage)

    }



    // const LineBreaker =()=>{
    //     var myArray = Data[indexNum.no][0].header;
    //     var brk = myArray.split('~');
    //     var res = brk.join("<br></br>");
    //     return res;
    //     // alert(res)
    // }

    const [indexNum, setIndexNum] = useState({
        no : PageLoader()
    })

    PageLoader();
    return (
        <div>
                <Banner header = {Data[indexNum.no][0].header}/>
                <Description img={Data[indexNum.no][0].photo} index = {indexNum.no}/>
            
                <Methodology index= {indexNum.no}/>
        </div>
    )
}
