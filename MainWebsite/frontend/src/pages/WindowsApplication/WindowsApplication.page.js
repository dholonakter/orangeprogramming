import React from 'react'
import {WindowsData} from '../../assets/Data/MyData'
import Section1 from '../../components/Windows_Components/section1/Section1.components'
import HalfLabel from '../../components/Windows_Components/HalfLabel/HalfLabel.components'
import WindowBanner from '../../components/ServicesBanner/ServicesBanner.component'
import DataCard from '../../components/ReuseableComponents/WindowsCard/WindowsCard.components'
import WindowsDescrioption from '../../components/ReuseableComponents/Services_Descripotion/Description.components'
import Services from '../../components/ReuseableComponents/Tools&Servicess/ToolsNServices.components'
import whyWindows from '../../assets/images/windows/why.jpg'
import Methodology from '../../components/Methodology/Methodology.component'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

export default function WindowsApplication() {
    let data = WindowsData[0];
    return (
        <div>
            <WindowBanner data={data.banner}/>
            <br/><br/>
            <Section1 header={data.top.a} content={data.top.b}/>
            <br/>
            <DataCard data={data.firstSectionCardData}/>
            <WindowsDescrioption  data={data.content} photo={data.photo}/>
            <HalfLabel/>
            <Services title={data.servicesTitle} data={data.WindowServices}/>
            <WindowsDescrioption weight='900' slidShow="false" icons={faCheckSquare} direction="row-reverse" title="Why Choose Windows Application?" data={data.whyWindows} photo={whyWindows}/>
            
            <br/><br/>
            <br/>

            <Methodology header="Windwos application methodology" data={data.methodology}/>
            
        </div>
    )
}
