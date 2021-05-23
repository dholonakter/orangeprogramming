import React from 'react'
import Banner from '../../components/Service_banner/Banner.components'
import Body from '../../components/Services_DescriptionBody/Description.components'
import Methodology from '../../components/Services_methodoloy/Methodology.components'
import {AIData} from '../../assets/Data/MyData'







export default function AI() {
    return (
        <div>
            <Banner dbName={AIData}/>
            <Body dbName={AIData}/>
            <Methodology dbName={AIData}/>
        </div>
    )
}
