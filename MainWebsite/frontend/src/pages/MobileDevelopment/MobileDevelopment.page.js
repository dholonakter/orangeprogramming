import React from 'react'
import Banner from '../../components/Service_banner/Banner.components'
import Body from '../../components/Services_DescriptionBody/Description.components'
import Methodology from '../../components/Services_methodoloy/Methodology.components'
import {MobileData} from '../../assets/Data/MyData'



export default function MobileDevelopment() {
    return (
        <div>
            <Banner dbName={MobileData}/>
            <Body dbName={MobileData}/>
            <Methodology dbName={MobileData}/>
        </div>
    )
}
