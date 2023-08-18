import React, { useEffect, useState } from 'react'
import './Nav.css'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import useLocaleStorage from '../Hooks/Hooks';
export default function Nav() {
    // let body = document.body.className = 'darkMode'
    let r = document.querySelector(':root');
    let rs = getComputedStyle(r)
    const [darkMode, setDarkmode] = useLocaleStorage('ON','')
    // const [darkMode,setDarkmode] = useState(false)

    // useEffect(()=>{
    //     if(localStorage.getItem('ON') != null){
    //         if(localStorage.getItem('ON')=="true"){
    //             darkmodeHandelerOff()

                
    //         }else{
    //             darkmodeHandelerOn()
  
    //         }
    //     }
    //     // setDarkmode(status)
    // },[])


    const darkmodeHandelerOn = ()=>{
            document.body.classList.add('darkMode')
            r.style.setProperty('--textColor', '#fff');
            r.style.setProperty('--boxColor', '#09165e'); 
            r.style.setProperty('--btnColor', '#111');

            // document.body.classList.toggle('darkMode')

    }

    const darkmodeHandelerOff = ()=>{
            r.style.setProperty('--textColor', '#111');
            r.style.setProperty('--boxColor', '#60a3ea');
            r.style.setProperty('--btnColor', '#fff');
            
            document.body.classList.remove('darkMode')


    }

    useEffect(()=>{
        if(darkMode){
            darkmodeHandelerOn()
            
        }else{
            darkmodeHandelerOff()
            
        }

    },[darkMode])
    

  return (
    <div className="navbar">
        <div className="navContainer">
            <div className="navLogo">Website</div>
            <div className="navItems">
                <div className="navIconsContainer">
                    <div id='Notification' className="navIcon">
                        <NotificationsNoneOutlinedIcon></NotificationsNoneOutlinedIcon>
                        <span className='navBadge'>2</span>
                        <div className='navColapce Notification'>
                            <ul className='navColapceItems'>
                                <li className='navColapceItem'>Notication 1</li>
                                <li className='navColapceItem'>Notcation 2</li>
                                <li className='navColapceItem'>Notcation 3</li>
                                <li className='navColapceItem'>Notcation 4</li>
                            </ul>

                        </div>
                    </div>
                    <div className="navIcon Settings">
                        <SettingsOutlinedIcon></SettingsOutlinedIcon>
                        <span className='navBadge'>2</span>
                        <div className='navColapce Settings'>
                            <ul className='navColapceItems'>
                                <li className='navColapceItem'>Settings 1</li>
                                <li className='navColapceItem'>Settings 2</li>
                                <li className='navColapceItem'>Settings 3</li>
                                <li className='navColapceItem'>Settings 4</li>
                            </ul>

                        </div>
                    </div>
                    <div className="navIcon Public">
                        <PublicOutlinedIcon></PublicOutlinedIcon>
                        <span className='navBadge'>2</span>
                        <div className='navColapce Public'>
                            <ul className='navColapceItems'>
                                <li className='navColapceItem'>alert 1</li>
                                <li className='navColapceItem'>alert 2</li>
                                <li className='navColapceItem'>alert 3</li>
                                <li className='navColapceItem'>alert 4</li>
                            </ul>

                        </div>
                    </div>
                    <div className="navIcon">
                        {!darkMode?(
                            <DarkModeOutlinedIcon onClick={()=>{
                                // darkmodeHandelerOn()
                                // // setDarkmode(preval=>!preval)
                                // // document.body.classList.toggle('darkMode')
                                // // r.style.setProperty('--textColor', '#fff');
                                // // r.style.setProperty('--boxColor', '#09165e');
                                // localStorage.setItem('ON',false)
                                setDarkmode(preval=>!preval)   
                            }} ></DarkModeOutlinedIcon>                        
                            
                            ):(
                                <WbSunnyOutlinedIcon onClick={()=>{
                                    // darkmodeHandelerOff()
                                    // setDarkmode(preval=>!preval)
                                    // document.body.classList.toggle('darkMode')
                                    // r.style.setProperty('--textColor', '#111');
                                    // r.style.setProperty('--boxColor', '#60a3ea');
                                    // localStorage.setItem('ON',true)
                                    // setDarkmode(true) 
                                    setDarkmode(preval=>!preval)                               
                            }}></WbSunnyOutlinedIcon>                        

                        )}
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
