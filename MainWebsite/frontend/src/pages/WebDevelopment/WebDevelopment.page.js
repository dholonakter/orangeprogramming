import React from 'react'
import Banner from '../../components/Service_banner/Banner.components'
import Body from '../../components/Services_DescriptionBody/Description.components'
import Methodology from '../../components/Services_methodoloy/Methodology.components'
import {Data, WebData} from '../../assets/Data/MyData'


export default function WebDevelopment() {
    return (
        <div>
            <Banner dbName={WebData}/>
            <Body dbName={WebData}/>
            <Methodology dbName={WebData}/>
        </div>
    )
}
