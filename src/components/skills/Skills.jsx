import React from 'react'
import './skills.css'
import Frontend from "./Frontend"
import Backend from "./Backend"
import Networking from "./Networking"
import SoftSkills from './SoftSkill'
import CloudDevOps from './Cloud'
import DatabaseOS from './Databases'
import AutomationTesting from './Testing'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My technical expertise</span>

        <div className="skills_container grid">
            
            <AutomationTesting/>
            <Backend/>
            <CloudDevOps/>
            <DatabaseOS/>
            <Frontend/>
            <Networking/>
            <SoftSkills/>
        </div>
    </section>
  )
}

export default Skills