import React from 'react'
import coderLogo from './images/coderhouse-logo.png'
import firebaseLogo from './images/lockup.png'
import reactLogo from './images/react-brands.svg'
import htmlLogo from './images/html5-brands.svg'
import sassLogo from './images/sass-brands.svg'
import jsLogo from './images/js-square-brands.svg'
import cssLogo from './images/css3-alt-brands.svg'
import bLogo from './images/bootstrap-brands.svg'
import npmLogo from './images/npm-brands.svg'


const About = () => {
    return (
        <div className='container about'>
            <div className='aboutTitle'>
                <h2>info</h2>
                <span>.info</span>
            </div>
            <div className='containerAbout'>
                <p className='paragraph'>Proyecto integrador realizado para el curso de React.JS con:</p>
                <div className='tools'>
                    <div className='itemGridTools'><img src={htmlLogo} alt=''/></div>
                    <div className='itemGridTools'><img src={cssLogo} alt=''/></div>
                    <div className='itemGridTools'><img src={jsLogo} alt=''/></div>
                    <div className='itemGridTools'><img src={bLogo} alt=''/></div>
                    <div className='itemGridTools'><img src={sassLogo} alt=''/></div>
                    <div className='itemGridTools'><img src={reactLogo} alt=''/></div>
                    <div className='itemGridTools'><img src={npmLogo} alt=''/></div>
                    <div className='itemGridTools'><img src={firebaseLogo} alt=''/></div>
                    

                </div>
                <div className='credits'>
                    <img src={coderLogo} alt='' />
                    
                    <p className='paragraph'>&copy; Copyright: Jesús Hernández</p>
                </div>
            </div>
            
        </div>
    )
}

export default About
