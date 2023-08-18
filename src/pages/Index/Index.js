import React from 'react'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import usePrinter from '../../componens/Hooks/Hooks';
import Chart from '../../componens/Chart/Chart';
import Cards from '../../componens/Cards/Cards';
import "./Index.css"
import WidgetSm from '../../componens/WidgetSm/WidgetSm';
import WidgetLg from '../../componens/WidgetLg/WidgetLg';
import { useState,useEffect } from 'react';

export default function Index() {
  // This is a test page
  // const [name,setName] =usePrinter('reza')
  const [GetData,setGetData]=useState(false)
  const [Show,setShow]=useState(false)
  const [Sales,setSales]=useState([])

  useEffect(()=>{
    async function fetchData(){
      await fetch('https://dashboard-admin-678c2-default-rtdb.firebaseio.com/sales.json')
      .then(res=>res.json())
      // .then(data=>setSales(Object.entries(data)))
      .then(data=>{
        setSales(Object.entries(data))
        // setShow(true)

      })
      
    }
    fetchData()

  },[GetData])

  useEffect(()=>{ 
    if (Sales.length>0){
      setShow(true)
    }

  },[Sales])

  return (
    <>
    <div className="indexContainer">
        <div className="cards">
            <Cards status='red' icon={<ArrowDownwardOutlinedIcon/>}></Cards>
            <Cards status='green' icon={<ArrowUpwardOutlinedIcon/>}></Cards>
            <Cards status='green' icon={<ArrowUpwardOutlinedIcon/>}></Cards>
        </div>
        {Show?(
          <div className='Charts'>
              <Chart title='Sell Chart' Data={Sales[0][1]} dataKey='name' debounce={300} aspect={3}></Chart>
          </div>

        ):('')}

        <div className="widgets">
            <WidgetSm></WidgetSm>
            <WidgetLg></WidgetLg>
        </div>
        
    </div>
    </>
  )
}
