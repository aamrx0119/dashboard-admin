import React from 'react'
import './Panel.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import { Link } from 'react-router-dom'
export default function Panel() {
  return (
    <div className="panelContainer">
        <div className="panelItemsContainer">
            <h3 className='panelTitle'>Dashboard</h3>
            <ul className='panelList'>
                <Link to='/' className="panelItems">
                    <li className='panelItem'><HomeOutlinedIcon/></li>
                    <span className='text-item'>Home</span>
                    
                </Link>
                <Link to='/Analytics' className="panelItems">
                    <li className='panelItem'><SpaceDashboardOutlinedIcon/></li>
                    <span className='text-item'>Analytics</span>

                </Link>
                <Link to='/Sales' className="panelItems">
                    <li className='panelItem'><TrendingUpOutlinedIcon/></li>
                    <span className='text-item'>Sales</span>

                </Link>
            </ul>
        </div>
        <div className="panelItemsContainer">
            <h3 className='panelTitle'>Quick menu</h3>
            <ul className='panelList'>
                <Link to='/Users' className="panelItems">
                    <li className='panelItem'><PersonOutlineOutlinedIcon/></li>
                    <span className='text-item'>Users</span>
                    
                </Link>
                <Link className="panelItems">
                <li className='panelItem'><PersonOutlineOutlinedIcon/></li>
                    <span className='text-item'>New Users</span>

                </Link>
                <Link to='/products' className="panelItems">
                    <li className='panelItem'><EmailOutlinedIcon/></li>
                    <span className='text-item'>Products</span>

                </Link>
                <Link className="panelItems">
                    <li className='panelItem'><MessageOutlinedIcon/></li>
                    <span className='text-item'>Transaction</span>

                </Link>
                <Link className="panelItems">
                    <li className='panelItem'><PersonOutlineOutlinedIcon/></li>
                    <span className='text-item'>Reports</span>

                </Link>
            </ul>
        </div>
        <div className="panelItemsContainer">
            <h3 className='panelTitle'>Notifications</h3>
            <ul className='panelList'>
                <Link className="panelItems">
                    <li className='panelItem'><EmailOutlinedIcon/></li>
                    <span className='text-item'>Mail</span>
                    
                </Link>
                <Link className="panelItems">
                <li className='panelItem'><MessageOutlinedIcon/></li>
                    <span className='text-item'>Messages</span>

                </Link>
                <Link className="panelItems">
                    <li className='panelItem'><TrendingUpOutlinedIcon/></li>
                    <span className='text-item'>Shop</span>

                </Link>
            </ul>
        </div>
        <div className="panelItemsContainer">
            <h3 className='panelTitle'>Staff</h3>
            <ul className='panelList'>
                <Link className="panelItems">
                    <li className='panelItem'><SpaceDashboardOutlinedIcon/></li>
                    <span className='text-item'>Manage</span>
                    
                </Link>
                <Link className="panelItems">
                <li className='panelItem'><TrendingUpOutlinedIcon/></li>
                    <span className='text-item'>Analytics</span>

                </Link>
                <Link className="panelItems">
                    <li className='panelItem'><EmailOutlinedIcon/></li>
                    <span className='text-item'>Reports</span>

                </Link>
            </ul>
        </div>
    </div>
  )
}
