import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocial = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/andy-li-65284220b/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/olafnub" target="_blank"><FaGithub/></a>
            <a href="https://dribbble.com/" target="_blank"><FiDribbble/></a>
        </div>
    )
}
export default HeaderSocial