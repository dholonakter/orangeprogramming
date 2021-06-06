import React from 'react'
import Banner from '../../components/Service_banner/Banner.components'
import Body from '../../components/Services_DescriptionBody/Description.components'
import Methodology from '../../components/Services_methodoloy/Methodology.components'
import {WindowsData} from '../../assets/Data/MyData'
import Section1 from '../../components/Windows_Components/section1/Section1.components'
import HalfLabel from '../../components/Windows_Components/HalfLabel/HalfLabel.components'
import Label from '../../components/Windows_Components/FullLabel/Label.components'
import Section2 from '../../components/Windows_Components/section2/Section2.components'



export default function WindowsApplication() {
    return (
        <div>
            <Banner dbName={WindowsData}/>
            <Section1/>
            <Body dbName={WindowsData}/>
            <HalfLabel/>
            <Section2/>
            <Label/>
            <Methodology dbName={WindowsData}/>
            
        </div>
    )
}
