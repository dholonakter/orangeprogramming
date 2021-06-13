import React from 'react'
import DescriptionArea from '../../components/ReuseableComponents/Services_Descripotion/Description.components'
import {AIData} from '../../assets/Data/MyData'
// import AIBanner from '../../components/ReuseableComponents/Services_Banner/Banner.components'
import Tools$Service from '../../components/ReuseableComponents/Tools&Servicess/ToolsNServices.components'
// import Methodology from '../../components/AI_methodoloy/Methodology.components'
import Lable from '../../components/ReuseableComponents/label/label.components'
import Methodology from '../../components/Methodology/Methodology.component'
import AIBanner from '../../components/ServicesBanner/ServicesBanner.component'


export default function AI() {
    let data = AIData[0];
    return (
        <div>
            
            {/* <AIBanner header={data.header} text={data.shortDescrioption} image={data.bannerImg}/> */}
            <AIBanner data={data.banner}/>
            
            <DescriptionArea data={data.content} photo={data.photo}/>
            <Tools$Service title={data.servicesTitle} data={data.services}/>
            <DescriptionArea direction="row-reverse" title="Why You Should Go With AI?" data={data.Why} photo={data.whyImage}/>
            <Tools$Service title={data.toolsTitle} data={data.tools}/>
            <Lable logo={data.labelLogo} label={data.labelTitle1}/>
            <br/>
            <Methodology header='Predictable AI methodology' data={AIData[0].methodology}/>
            <Tools$Service contentPadding="0 25px 0 0" Padding="0" title={data.platformTitle} item='4' data={data.platform}/>
            

        </div>
    )
}
