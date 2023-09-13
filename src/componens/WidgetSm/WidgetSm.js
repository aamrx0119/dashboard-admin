import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState,useEffect } from 'react';
import './WidgetSm.css'
export default function WidgetSm() {
    const [Users,setUsers] = useState([])
    const [GetDAta,setGetDAta] = useState(false)
    const [Show,setShow] = useState(false)

    useEffect(()=>{
        async function fetchData(){
            await fetch('https://dashboard-admin-678c2-default-rtdb.firebaseio.com/users.json')
            .then(res=>res.json())
            .then(data=>setUsers(Object.entries(data)))           
        }
        fetchData()
        
    },GetDAta)


    useEffect(()=>{
        if(Users.length>0){
            setShow(true)
        }    
    },[Users])


  return (
    <div className="widgetSm">
        <h3 className="widgetSmTitle">New Users</h3>
        {Show?(
            Users[0][1].map(user=>{

                return(

                    <ul key={user.id} className="widgetSmItems">
                        <li className="widgetSmItem">
                            <img  className='widgetSmImg' src="./images/medium.jpg" alt="" />
                        </li>
                        <li className="widgetSmItem">
                            <p className="widgetSmName">{user.name}</p>
                            <span className='widgetSmJob'>{user.job}</span>
                        </li>
                        <li className="widgetSmItem">
                            <VisibilityIcon className='widgetSmItemIcon'/>
                        </li>
                    </ul>
                )

            })

        ):('Waiting ..')}
    </div>
  )
}
