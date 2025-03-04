import React from 'react'
import './nav.css'
import { IoIosHome } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import { TbBook2 } from "react-icons/tb";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from 'react';
import { RiGalleryFill } from "react-icons/ri";
import { BiPackage } from "react-icons/bi";








const nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><IoIosHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><LuUserRound/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><TbBook2/></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiGalleryFill /></a>
      <a href='#Mini' onClick={() => setActiveNav('#mini')} className={activeNav === '#mini' ? 'active' : ''}><BiPackage  /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>


    </nav>
  )
}

export default nav