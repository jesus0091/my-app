import React from 'react'
import {gsap} from 'gsap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouseUser, faShoppingBag, faUserCircle} from '@fortawesome/free-solid-svg-icons'



const NavBar = () => {
    const move = (id, position, color) => {
        let tl = gsap.timeline();
        tl.to("#bgBubble", {duration: 0.15, bottom: "-30px", ease: "ease-out"}, 0)
          .to("#bubble1", {duration: 0.1, y: "150%", boxShadow: 'none', ease: "ease-out",}, 0)
          .to("#bubble2", {duration: 0.1, y: "150%", boxShadow: 'none', ease: "ease-out",}, 0)
          .to("#bubble3", {duration: 0.1, y: "150%", boxShadow: 'none', ease: "ease-out",}, 0)
          .to(".icon", {duration: 0.05, opacity: 0, ease: "ease-out",}, 0)
          .to("#bgBubble", {duration: 0.2, left: position, ease: "ease-in-out"}, 0.1)
          .to("#bgBubble", {duration: 0.15, bottom: "-50px", ease: "ease-out"}, '-=0.2')
          .to(`#bubble${id}`, {duration: 0.15, y: "0%", opacity: 1, boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', ease: "ease-out"}, '-=0.1')
          .to(`#bubble${id}> span`, {duration: 0.15, y: "0%", opacity: 0.7, ease: "ease-out"}, '-=0.1')
          .to("#navbarContainer", {duration: 0.3, backgroundColor: color, ease: "ease-in-out"}, 0)
          .to("#bg", {duration: 0.3, backgroundColor: color, ease: "ease-in-out"}, 0)
          .to("#bgBubble", {duration: 0.3, backgroundColor: color, ease: "ease-in-out"}, 0)
    }
    return (
        <div>
           <div className='fixed-bottom' id="navbarContainer">
                <div id="navbar">
                    <div id="bubbleWrapper">
                        <a href="/#" id="bubble1" className="bubble"><span className="icon"><FontAwesomeIcon icon={faHouseUser} /></span></a>
                        <a href="/#" id="bubble2" className="bubble"><span className="icon"><FontAwesomeIcon icon={faShoppingBag} /></span></a>
                        <a href="/#" id="bubble3" className="bubble"><span className="icon"><FontAwesomeIcon icon={faUserCircle} /></span></a>
                    </div>
                    <div id="menuWrapper">
                        <a href="/#" id="menu1" className="menuElement" onClick={ () => move('1', '16.67%', '#ffff')}>
                            <FontAwesomeIcon icon={faHouseUser} />
                        </a>
                        <a href="/#" id="menu2" className="menuElement" onClick={ () => move('2', '50.0%', '#ffff')}>
                            <FontAwesomeIcon icon={faShoppingBag} />
                        </a>
                        <a href="/#" id="menu3" className="menuElement" onClick={ () => move('3', '83.34%', '#ffff')}>
                            <FontAwesomeIcon icon={faUserCircle} />
                        </a>
                    </div>
                </div>
                <div id="bgWrapper">
                    <div id="bg"></div>
                    <div id="bgBubble"></div>
                </div>
            </div>
            <svg width="0" height="0">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" id="blurFilter" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -15"
                            result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>
        </div>
    )
    
}


export default NavBar




