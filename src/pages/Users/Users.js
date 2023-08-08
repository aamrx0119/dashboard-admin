import React from 'react'
import "./Users.css"
import { DataGrid } from '@mui/x-data-grid';
import {Link} from 'react-router-dom'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const rows = [
    {id:1,name:'emad',avatar:'./images/medium.jpg',email:'a@gmail.com',transaction:250},
    {id:2,name:'mersad',avatar:'./images/medium.jpg',email:'a@gmail.com',transaction:100},
    {id:3,name:'elham',avatar:'./images/medium.jpg',email:'a@gmail.com',transaction:0},
    {id:4,name:'negin',avatar:'./images/medium.jpg',email:'a@gmail.com',transaction:500},
]

const columns = [
    {
        field:'id',
        headerName:'ID',
        width:50
    
    },
    {
        field:'User',
        headerName:'User',
        width:250,
        renderCell:(params)=>{
            return (
                <Link to={`/Users/${params.row.id}`} className='userDetail'>
                    <img className='userImg' src={params.row.avatar} alt="" />
                    <span className='userName'>{params.row.name}</span>
                
                </Link>
            )
        }
    
    },
    {
        field:'email',
        headerName:'Email',
        width:250
    
    },
    {
        field:'transaction',
        headerName:'Transaction',
        width:250
    
    },
    {
        field:'action',
        headerName:'Acion',
        width:250,
        renderCell:(params)=>{
            return(
                <div className='actionUsers'>
                    <span className='actionEdit'>Edit</span>
                    <DeleteOutlineOutlinedIcon className='actionDelete' />

                </div>

            )

        }
    
    },
]


export default function Users() {
  return (
    <div className="usersContainer">

        <div className='GridContainer'>
            <DataGrid
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
