import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import logo from '../img/ginger-cat-upgrade.png'
import { rightBtnObjects } from '../data/navigation'

const HeaderNav = () => {

    const RightNavSub = (props) => {
        return props.subLinks.map((item, i) => (
            <li key={i}>
                <NavLink to={item.url} className={`btn subbtn`}>
                    {item.title}
                </NavLink>
            </li>
        ))
    }

    const RightNav = () => {
        return rightBtnObjects.map((item, i) => (
            <li key={i}>
                <NavLink to={item.url} className={`btn subbtn `}>
                    {item.title}
                </NavLink>
                {item.hasSub && (
                    <ul>
                        <RightNavSub subLinks={item.subLinks} />
                    </ul>
                )}
            </li>
        ))
    }

    return(
        <header>
            <div className="navLeft">
                <img src={logo} alt="logo" className="brand-logo" />
                <Link to="/">
                    <h3>Nyaa</h3>
                </Link>
            </div>

            <div className="navRight">
                <ul>
                    <RightNav />
                </ul>
            </div>
        </header>
    )
}

export default HeaderNav