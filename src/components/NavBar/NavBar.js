import React from 'react'
import {gsap} from 'gsap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouseUser, faShoppingBag, faUserCircle} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'



const NavBar = () => {
    const move = (id, position, color) => {
        let tl = gsap.timeline();
        tl.to("#bgBubble", {duration: 0.15, bottom: "-30px", ease: "ease-out"}, 0)
          .to("#bubble1", {duration: 0.1, y: "170%", boxShadow: 'none', ease: "ease-out",}, 0)
          .to("#bubble2", {duration: 0.1, y: "170%", boxShadow: 'none', ease: "ease-out",}, 0)
          .to("#bubble3", {duration: 0.1, y: "170%", boxShadow: 'none', ease: "ease-out",}, 0)
          .to(".icon", {duration: 0.05, opacity: 0, ease: "ease-out",}, 0)
          .to("#bgBubble", {duration: 0.2, left: position, ease: "ease-in-out"}, 0.1)
          .to("#bgBubble", {duration: 0.15, bottom: "-50px", ease: "ease-out"}, '-=0.2')
          .to(`#bubble${id}`, {duration: 0.15, y: "0%", opacity: 1, ease: "ease-out"}, '-=0.1')
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
                        <div id="bubble1" className="bubble"><span className="icon"><FontAwesomeIcon icon={faHouseUser} /></span></div>
                        <div id="bubble2" className="bubble"><span className="icon"><FontAwesomeIcon icon={faShoppingBag} /></span></div>
                        <div id="bubble3" className="bubble"><span className="icon"><FontAwesomeIcon icon={faUserCircle} /></span></div>
                    </div>
                    <div id="menuWrapper">
                        <NavLink to='/#' id="menu1" className="menuElement" onClick={ () => move('1', '16.67%', '#fff5ea')}>
                            <FontAwesomeIcon icon={faHouseUser} />
                        </NavLink>
                        <NavLink to="/#" id="menu2" className="menuElement" onClick={ () => move('2', '50.0%', '#ffff')}>
                            <FontAwesomeIcon icon={faShoppingBag} />
                        </NavLink>
                        <NavLink to="/profile" id="menu3" className="menuElement" onClick={ () => move('3', '83.34%', '#ffff')}>
                            <FontAwesomeIcon icon={faUserCircle} />
                        </NavLink>
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




