import React from 'react'
import CurrentProject from '../../components/ReuseableComponents/Services_Descripotion/Description.components'
import { faAngleDoubleRight, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { Projects } from '../../assets/Data/MyData';
import PorjectBodys from "../../components/OurProjects/OurProjects.components"
// import OurProjects from '../../components/OurProjects/OurProjects.components'


export default function ProjectPage() {
    let data = Projects[0];
    return (
        <div>
            <br/><br/><br/>
            <CurrentProject description={data.newProject.description} photo={data.newProject.img} icons={faAngleDoubleRight} title={data.newProject.header} direction="row-reverse" weight='500' slidShow="false" data={data.newProject.features}/>
            <br/><br/>
            <PorjectBodys data={data.doneProjects}/>
            <br/><br/>

        </div>
    )
}
