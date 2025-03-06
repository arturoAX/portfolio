import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
         <div className='header__socials'>
        <a href="https://www.instagram.com/arturo.photo8/" target="_blank"><FaInstagram/></a>
        <a href="https://www.tiktok.com/@photoink?_t=8riv6Ah0kKg&_r=1" target="_blank"><AiFillTikTok/></a>
        

    </div>
    </div>
  );
}


export default HeaderSocials