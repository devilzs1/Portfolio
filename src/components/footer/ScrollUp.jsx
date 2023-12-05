import React from 'react'
import './scrollup.css'

const ScrollUp = () => {
    window.addEventListener("scroll", function(){
        const scrollUp = document.querySelector(".scrollup");
        if(scrollY >= 560){
            scrollUp.classList.add("show-scroll");
            scrollUp.classList.remove("scroll-hidden");
        }
        else{
            scrollUp.classList.remove("show-scroll");
            scrollUp.classList.add("scroll-hidden");
        }
    })
  return (
    <a href="#" className="scrollup scroll-hidden">
        <i className="uil uil-arrow-up scrollup-icon"></i>
    </a>
  )
}

export default ScrollUp