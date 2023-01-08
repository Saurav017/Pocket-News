import React from 'react'
import classes from './Navbar.module.css'
import { assets, socials } from './NavAssets'
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  return (
    <nav className={classes.container}>
        <div className={classes.logo_div}>
            <span className={classes.logo}>S</span>
        </div>
        <div className={classes.links}>
            <ul>
                {assets.map((asset) => {
                    return <li key={asset.id}className={classes.navLink}><Link to='/'>{asset.title}</Link></li>
                }
                )}
            </ul>
        </div>

        <div className={classes.socials}>
            {socials.map((social) => {
                return <div className={classes.social} key={social.id}>{social.icon}</div>

            })}
        </div>

        <div className={classes.toggle}>
            <GiHamburgerMenu/>
        </div>
    </nav>
  )
}

export default Navbar