import React from 'react'
import Banner from '../../components/Service_banner/Banner.components'
import Body from '../../components/Services_DescriptionBody/Description.components'
import Methodology from '../../components/Services_methodoloy/Methodology.components'
import {AIData} from '../../assets/Data/MyData'
import Section1 from '../../components/AI/Section1/Section1.componets'
import Section2 from '../../components/AI/Section2/Section2.components'





export default function AI() {
    return (
        <div>
            <Banner dbName={AIData}/>
            <Body dbName={AIData}/>
            <Section1/>
            <Section2/>
            <Methodology dbName={AIData}/>
        </div>
    )
}
