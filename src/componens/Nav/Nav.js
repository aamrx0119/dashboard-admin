import React, { useEffect, useState,useRef } from 'react'
import './Nav.css'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import useLocaleStorage from '../Hooks/Hooks';
import { Link } from 'react-router-dom';
export default function Nav({Func}) {

    // const myElm = useRef()
    // const myElm1 = useRef()

    let r = document.querySelector(':root');
    const [darkMode, setDarkmode] = useLocaleStorage('ON','')

    const menuModel = useRef()


    const darkmodeHandelerOn = ()=>{
            Func(false)
            r.style.setProperty('--textColor', '#fff');
            r.style.setProperty('--boxColor', '#09165e'); 
            r.style.setProperty('--btnColor', '#111');
            
            // document.body.classList.toggle('darkMode')
            
        }
        
        const darkmodeHandelerOff = ()=>{
            r.style.setProperty('--textColor', '#111');
            r.style.setProperty('--boxColor', '#60a3ea');
            r.style.setProperty('--btnColor', '#fff');
            Func(true)
            


    }

    useEffect(()=>{
        if(darkMode){
            darkmodeHandelerOn()
            
        }else{
            darkmodeHandelerOff()
            
        }

    },[darkMode])



    const navToggle = (className)=>{
        let Elms = document.querySelectorAll('.navColapce')
        let targetElm = document.querySelector(`.${className}`)
        Elms.forEach(elm=>{
            if(elm.className == targetElm.className){
                elm.classList.toggle('active')
            }else{
                elm.classList.remove('active')
            }
        })
    }
    

    // useEffect(()=>{
    //     myElm.current.style.color="red"
    //     myElm.current.style.backgroundColor="blue"
    //     myElm1.current.style.color="red"
    //     myElm1.current.style.backgroundColor="blue"

    // },[])

  return (
    <>
        <div className="navbar">
            <div className="navContainer">
                <div className="navLogo">Website</div>
                <div className="navItems">
                    <div className="navIconsContainer">
                        <div id='Notification' onClick={(e)=>navToggle('Notification')}  className="navIcon">
                            <NotificationsNoneOutlinedIcon></NotificationsNoneOutlinedIcon>
                            <span className='navBadge'>2</span>
                            <div className='navColapce Notification'>
                                <ul className='navColapceItems'>
                                    <Link to='product/1' className='navColapceItem'>Product 1</Link>
                                    <Link to='products' className='navColapceItem'><li>Products</li></Link>
                                    <Link to='' className='navColapceItem'><li>Home</li></Link>
                                    {/* <Link to='/product/4' className='navColapceItem'><li>Product 4</li></Link> */}
                                </ul>

                            </div>
                        </div>
                        <div onClick={()=>navToggle('Settings')} className="navIcon">
                            <SettingsOutlinedIcon></SettingsOutlinedIcon>
                            <span className='navBadge'>2</span>
                            <div className='navColapce Settings'>
                                <ul className='navColapceItems'>
                                    
                                    <Link className='navColapceItem'><li>Settings 1</li></Link>
                                    <Link className='navColapceItem'><li>Settings 2</li></Link>
                                    <Link className='navColapceItem'><li>Settings 3</li></Link>
                                    <Link className='navColapceItem'><li>Settings 4</li></Link>
                                </ul>

                            </div>
                        </div>
                        <div className="navIcon" onClick={()=>navToggle('Public')}>
                            <PublicOutlinedIcon></PublicOutlinedIcon>
                            <span className='navBadge'>2</span>
                            <div className='navColapce Public'>
                                <ul className='navColapceItems'>
                                    <Link className='navColapceItem'><li>alert 1</li></Link>
                                    <Link className='navColapceItem'><li>alert 2</li></Link>
                                    <Link className='navColapceItem'><li>alert 3</li></Link>
                                    <Link className='navColapceItem'><li>alert 4</li></Link>
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
                    <div className="navIcon menu">
                        <MenuIcon onClick={()=>{

                            menuModel.current.classList.add('activeMenu')
                        }}></MenuIcon>
                    </div>
                </div>
            </div>
        </div>
        <div ref={menuModel} className="navMenu">
            <ul className="navMenuItems">
                <div className='MenuItemContainer'>
                    <Link className="navMenuItem"><li>home 1 </li></Link>
                    <Link className="navMenuItem"><li>home 1 </li></Link>
                    <Link className="navMenuItem"><li>home 1 </li></Link>
                    <Link className="navMenuItem"><li>home 1 </li></Link>
                    <Link className="navMenuItem"><li>home 1 </li></Link>

                </div>
                <CloseIcon  onClick={()=>{
                    menuModel.current.classList.remove('activeMenu')

                }} className='closeMenuBtn' style={{fontSize:'2rem'}}></CloseIcon>

            </ul>
        </div>    
    </>
  )
}
