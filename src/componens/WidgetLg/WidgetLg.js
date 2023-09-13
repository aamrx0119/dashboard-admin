import React from 'react'
import './WidgetLg.css'
import { useState,useEffect } from 'react'

export default function WidgetLg() {
    const [Customers,setCustomers]=useState([])
    const [Show,setShow]=useState(false)
    const [GetData,setGetData]=useState(false)
    
    
    
    useEffect(()=>{
        async function fetchData(){

            await fetch('https://dashboard-admin-678c2-default-rtdb.firebaseio.com/customers.json')
            .then(res=>res.json())
            .then(data=>setCustomers(Object.entries(data)))
        }
        fetchData()

    },[GetData])
    
    useEffect(()=>{
        if (Customers.length>0){
            console.log(Customers[0][1][2].name);
            setShow(true)
        }

    },[Customers])


    
    
    
    const ButtonCustom  = ({type})=>{
        return <span className={`tableStatus tableStatus${type}`}>{type}</span>
    }
    


  return (
    <div className='widgetLg'>
        <h3 className="widgetTitleLg">Lastest TransAction</h3>
        <table className='tableLg'>
            <thead>

                <tr className='tableRow'>
                    <th className='tableHead'>Customer</th>
                    <th className='tableHead'>Date</th>
                    <th className='tableHead'>Amount</th>
                    <th className='tableHead'>Status</th>
                </tr>
            </thead>
            {Show?(
                <tbody>
                    
                    {Customers[0][1].map(customer=>{
                        return (
                            
                            <tr key={customer.id} className='tableRow'>
                                <td className='tableData tableCustomer'>
                                    <img className='customerImg' width={40} height={40} src="./images/medium.jpg" alt="" />
                                    <span className='customerName'>{customer.name}</span>
                                </td>
                                <td className='tableData tableinfo'>{customer.date}</td>
                                <td className='tableData tableinfo'>{customer.price}$</td>
                                <td className='tableData'>
                                    <ButtonCustom type = {customer.status}></ButtonCustom>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>

            ):null}
        </table>

    </div>
  )
}
