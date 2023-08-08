import React from 'react'
import './Nav.css'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

export default function Nav() {
  return (
    <div className="navbar">
        <div className="navContainer">
            <div className="navLogo">Website</div>
            <div className="navItems">
                <div className="navIconsContainer">
                    <div className="navIcon">
                        <NotificationsNoneOutlinedIcon ></NotificationsNoneOutlinedIcon>
                        <span className='navBadge'>2</span>
                    </div>
                    <div className="navIcon">
                        <SettingsOutlinedIcon></SettingsOutlinedIcon>
                        <span className='navBadge'>2</span>
                    </div>
                    <div className="navIcon">
                        <PublicOutlinedIcon></PublicOutlinedIcon>
                        <span className='navBadge'>2</span>
                    </div>
                    <div className="navIcon">
                        <DarkModeOutlinedIcon></DarkModeOutlinedIcon>                        
                        <WbSunnyOutlinedIcon></WbSunnyOutlinedIcon>                        
                    </div>
                </div>
                <div className="navAvatarContainer">      
                    <img className='navAvatar' src="/images/medium.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
