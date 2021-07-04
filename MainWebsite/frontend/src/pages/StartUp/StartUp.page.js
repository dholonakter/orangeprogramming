import React from 'react'
import ScaleUpBanner from '../../components/ServicesBanner/ServicesBanner.component';
import { ScaleUp } from '../../assets/Data/MyData';
import TopSection from '../../components/Windows_Components/section1/Section1.components';
import StartUpDescription from '../../components/ReuseableComponents/Services_Descripotion/Description.components';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import Methodology from '../../components/Methodology/Methodology.component'
import Services from '../../components/ReuseableComponents/Tools&Servicess/ToolsNServices.components'
import StartUpLabel from '../../components/StartUpLabel/StartUpLabel.components';
import Label from '../../components/Windows_Components/FullLabel/Label.components'
import Appointment from '../../components/Appointment/Appointment.components';
import Des01 from '../../assets/images/startUp/b2.jpg';




export default function StartUp() {
    let data = ScaleUp[0];
    return (
        <div>
            <ScaleUpBanner data={data.banner}/>
            <br/><br/>
            <TopSection/>
            <StartUpDescription weight='900' slidShow="false" icons={faCheckSquare} photo={Des01} title="Startup Business Consulting Help" data={data.whyWindows} />
            <br/><br/>
            {/* <StartUpLabel/> */}

            <Label/>
            <br/><br/><br/>
            <Services Padding="0px" item={12} SingleColumn="true"  title={data.servicesTitle} data={data.WindowServices}/>
            <br/><br/>
            <Methodology header="Startup Business Consulting Process" data={data.methodology}/>
        </div>
    )
}
