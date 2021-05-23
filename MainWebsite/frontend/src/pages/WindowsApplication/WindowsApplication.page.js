import React from 'react'
import Banner from '../../components/Service_banner/Banner.components'
import Body from '../../components/Services_DescriptionBody/Description.components'
import Methodology from '../../components/Services_methodoloy/Methodology.components'
import {WindowsData} from '../../assets/Data/MyData'



export default function WindowsApplication() {
    return (
        <div>
            <Banner dbName={WindowsData}/>
            <Body dbName={WindowsData}/>
            <Methodology dbName={WindowsData}/>
        </div>
    )
}
