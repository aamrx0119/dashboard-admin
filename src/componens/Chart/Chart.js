import React from 'react'
import { LineChart,YAxis,XAxis,Line,CartesianGrid,Tooltip,ResponsiveContainer } from 'recharts';
import './Chart.css'


export default function Chart({title,debounce,aspect,Data,dataKey}) {
  let r = document.querySelector(':root');
  let rs = getComputedStyle(r)
  let chartColor = (rs.getPropertyValue('--chartColor'));
  return (
    <>

            <h2 className='chartTitle'>{title}</h2>

            <ResponsiveContainer debounce={debounce} width="100%"  aspect={aspect} >
                    
                <LineChart className='Cahrt' data={Data}>
                    <XAxis stroke='#fff' dataKey={dataKey}/>
                    <YAxis stroke='#fff' />
                    <CartesianGrid stroke="#fff" strokeDasharray="10"/>
                    <Line type="monotone" dataKey="price" stroke={`${chartColor}`} strokeWidth={4} />
                    <Tooltip contentStyle={{backgroundColor: 'white',color:'black'}} />
                </LineChart>
            </ResponsiveContainer> 

    </>
  )
}
