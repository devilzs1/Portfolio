import React from 'react'
import './work.css'

const WorkItems = ({item}) => {
  return (
    <div className="work_card" key={item.id}>
        <img src ={item.image} alt='' className="work_img"/>
        <h3 className="work_title">{item.title}</h3>
        <div className="work_button-list">
            <a href={item.link} className="work_button" target = '_blank'>
                Demo <i className="bx bx-right-arrow-alt work_button-icon"></i>
            </a>
            {/* <a href='#' className="work_button">
                Code <i className="bx bx-right-arrow-alt work_button-icon"></i>
            </a> */}
        </div>
    </div>
  )
}

export default WorkItems