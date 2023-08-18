import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {Link} from 'react-router-dom'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import './Products.css'

export default function Products() {
    const [Products,setProducts]= useState([])
    const [Show,setShow]= useState(false)
    const [GetData,setGetData]= useState(false)

    useEffect(()=>{
        async function fetchData(){
            
            await fetch('https://dashboard-admin-678c2-default-rtdb.firebaseio.com/products.json')
            .then(res=>res.json())
            .then(data=>setProducts(Object.entries(data)))
        }
        fetchData()

    },[GetData])


    useEffect(()=>{
        if (Products.length>0){
            setShow(true)
        }
    },[Products])


    let rows = []
    if (Show){
        Products.forEach(pr=>{
            rows.push(pr[1])
        })
    }else{
        rows = []

    }




    
    const columns = [
        {
            field:'id',
            headerName:'ID',
            width:50
        
        },
        {
            field:'name',
            headerName:'Product Name',
            width:250,
            renderCell:(params)=>{
                return (
                    <Link to={`/product/${params.row.id}`} className='userDetail'>
                        <img className='userImg' src={params.row.avata} alt="" />
                        <span className='userName'>{params.row.name}</span>
                    
                    </Link>
                )
            }
        
        },
        {
            field:'price',
            headerName:'Price ($)',
            width:250
        
        },
        {
            field:'active',
            headerName:'Active',
            width:150
        
        },
        {
            field:'in_stock',
            headerName:'In Stock',
            width:150
        
        },
        {
            field:'action',
            headerName:'Acion',
            width:250,
            renderCell:(params)=>{
                return(
                    <div className='actionUsers'>
                        <Link to={`/product/${params.row.id}`} className='actionEdit'>Edit</Link>
                        <DeleteOutlineOutlinedIcon className='actionDelete' onClick={()=>{
                            let delProduct =  Products.find(product=>{
                                return product[1].id == params.id
                            })
                            async function fetchData(){
                                await fetch(`https://dashboard-admin-678c2-default-rtdb.firebaseio.com/products/${delProduct[0]}.json`,{
                                    method : 'DELETE'
                                })
                                setGetData(preval=>!preval)
                                
                            }
                            fetchData()
                        }} />
    
                    </div>
    
                )
    
            }
        
        },
    ]
    
  return (
    <div className='productsContainer'>
        <div className="gridProducts">
            <DataGrid getRowClassName={'dataGrid'} className='dataGrid'
            rows={rows}
            columns={columns}
            pageSizeOptions={[4]}
            checkboxSelection
            disableRowSelectionOnClick
            />
        </div>

    </div>
  )
}
