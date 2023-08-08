import React from 'react'
import { LineChart,YAxis,XAxis,Line,CartesianGrid,Tooltip,ResponsiveContainer } from 'recharts';
import './Chart.css'


export default function Chart({title,debounce,aspect,Data,dataKey}) {
  return (
    <>

            <h2 className='chartTitle'>{title}</h2>

            <ResponsiveContainer debounce={debounce} width="100%"  aspect={aspect} >
                    
                <LineChart data={Data}>
                    <XAxis dataKey={dataKey}/>
                    <YAxis />
                    <CartesianGrid stroke="#eee" strokeDasharray="10"/>
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer> 

    </>
  )
}
