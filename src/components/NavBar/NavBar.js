import React from 'react'
import {gsap} from 'gsap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouseUser, faInfoCircle, faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    const move = (id, position) => {
        let tl = gsap.timeline();
        tl.to("#bgBubble", {duration: 0.15, bottom: "-30px", ease: "ease-out"}, 0)
          .to("#bubble1", {duration: 0.1, y: "200%", boxShadow: 'none', ease: "ease-out",}, 0)
          .to("#bubble2", {duration: 0.1, y: "200%", boxShadow: 'none', ease: "ease-out",}, 0)
          .to("#bubble3", {duration: 0.1, y: "200%", boxShadow: 'none', ease: "ease-out",}, 0)
          .to(".icon", {duration: 0.05, opacity: 0, ease: "ease-out",}, 0)
          .to("#bgBubble", {duration: 0.2, left: position, ease: "ease-in-out"}, 0.1)
          .to("#bgBubble", {duration: 0.15, bottom: "25px", ease: "ease-out"}, '-=0.2')
          .to(`#bubble${id}`, {duration: 0.15, y: "0%", opacity: 1, ease: "ease-out"}, '-=0.1')
          .to(`#bubble${id}> span`, {duration: 0.15, y: "0%", opacity: 0.7, ease: "ease-out"}, '-=0.1')
          .to("#navbarContainer", {duration: 0.3, ease: "ease-in-out"}, 0)
          .to("#bg", {duration: 0.3, ease: "ease-in-out"}, 0)
          .to("#bgBubble", {duration: 0.3, ease: "ease-in-out"}, 0)
    }
    return (
        <div>
           <div className='' id="navbarContainer">
                <div id="navbar">
                    <div id="bubbleWrapper">
                        <Link to='/#' id="bubble1" className="bubble"><span className="icon"><FontAwesomeIcon icon={faHouseUser} /></span>
                        </Link>
                        <Link to='/profile' id="bubble2" className="bubble"><span className="icon"><FontAwesomeIcon icon={faShoppingBag} /></span></Link>
                        <Link to='/about' id="bubble3" className="bubble"><span className="icon"><FontAwesomeIcon icon={faInfoCircle} /></span></Link>
                    </div>
                    <div id="menuWrapper">
                        <NavLink to='/#' id="menu1" className="menuElement" onClick={ () => move('1', '17%')}>
                            <FontAwesomeIcon icon={faHouseUser} />
                        </NavLink>
                        <NavLink to="/profile" id="menu2" className="menuElement" onClick={ () => move('2', '50.0%')}>
                            <FontAwesomeIcon icon={faShoppingBag} />
                        </NavLink>
                        <NavLink to="/about" id="menu3" className="menuElement" onClick={ () => move('3', '83%')}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                        </NavLink>
                    </div>
                </div>
                <div id="bgWrapper">
                    <div id="bg"></div>
                    <div id="bgBubble"></div>
                </div>
            </div>
        </div>
    )
    
}
export default NavBar