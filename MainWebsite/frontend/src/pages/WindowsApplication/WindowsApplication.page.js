import React from 'react'
// import Banner from '../../components/Service_banner/Banner.components'
import Body from '../../components/Services_DescriptionBody/Description.components'
// import Methodology from '../../components/Services_methodoloy/Methodologys.components'
import {WindowsData} from '../../assets/Data/MyData'
import Section1 from '../../components/Windows_Components/section1/Section1.components'
import HalfLabel from '../../components/Windows_Components/HalfLabel/HalfLabel.components'
import Label from '../../components/Windows_Components/FullLabel/Label.components'
import Section2 from '../../components/Windows_Components/section2/Section2.components'
import WindowBanner from '../../components/ServicesBanner/ServicesBanner.component'
import DataCard from '../../components/ReuseableComponents/WindowsCard/WindowsCard.components'
import WindowsDescrioption from '../../components/ReuseableComponents/Services_Descripotion/Description.components'
import Ring from '../../components/WindowMethodology/Ring.compornents'
// import Methodology from '../../components/AI_methodoloy/Methodology.components'
import Services from '../../components/ReuseableComponents/Tools&Servicess/ToolsNServices.components'
import whyWindows from '../../assets/images/windows/why.jpg'
import Methodology from '../../components/Methodology/Methodology.component'


export default function WindowsApplication() {
    let data = WindowsData[0];
    return (
        <div>
            <WindowBanner data={data.banner}/>
            
            <Section1/>
            <br/>
            {/* <DataCard/> */}
            <DataCard data={data.firstSectionCardData}/>
            <WindowsDescrioption data={data.content} photo={data.photo}/>
            <HalfLabel/>
            {/* <DataCard data={data.WindowServices}/> */}
            <Services title={data.servicesTitle} data={data.WindowServices}/>
            {/* <Ring/> */}
            <WindowsDescrioption direction="row-reverse" title="Why Choose Windows Application?" data={data.whyWindows} photo={whyWindows}/>
            
            {/* <Label/> */}

            <br/><br/>
            <br/>

            <Methodology header="Windwos application methodology" data={data.methodology}/>
            
        </div>
    )
}
