import React from 'react'
import './Product.css'
import Chart from '../../componens/Chart/Chart'
import Data from '../../componens/Data/Data';
import { useParams } from 'react-router-dom';
import { useState,useEffect,useMemo } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Publishicon from '@mui/icons-material/Publish';
import { memo } from 'react';
import { useRef } from 'react';

export default function Product() {
    const [Products,setProducts]=useState([])
    const [Show,setShow]=useState(false)
    const [GetData,setGetData]=useState(false)
    const [Product,setProduct]=useState([])
    const [ProductName,setProductName]=useState('')
    const [Active,setActive]= useState(false)
    const [InStock,setInStock]= useState(false)
    // const [Image,setImage]= useState([])
    const [ShowModal,setShowModal]=useState(false)
    const [NewName,setNewName]=useState('')
    const [NewPrice,setNewPrice]=useState('')
    const [NewActive,setNewActive]=useState(false)
    const [NewINStock,setNewINStock]=useState(false)

    const cssStyles = useRef()



    const [Name,setName]=useState('MYname')

    let items = {
        active:false,
        avata:'/images/LG.avif',
        id:2,
        in_stock:true,
        name:"LG",
        price:2500
    }

    // fetch('https://dashboard-admin-678c2-default-rtdb.firebaseio.com/products.json',{
    //     method:"POST",
    //     body:JSON.stringify(items)
    // })

    let params = useParams()

    useEffect(()=>{
        async function fetchData (){

            await fetch('https://dashboard-admin-678c2-default-rtdb.firebaseio.com/products.json')
            .then(res=>res.json())
            .then(data=>setProducts(Object.entries(data)))
        }
        fetchData()

    },[GetData])

    useEffect(()=>{
        if(Products.length>0){
            if(Products.some(product=>product[1].id==params.productID)){
                setShow(true)
                setProduct(Products.find(product=>product[1].id==params.productID))
                
            }
        }
        
        
    },[Products])

    useEffect(()=>{
        if (Show){

            setProductName(Product[1].name)
            setActive(Product[1].active)
            setInStock(Product[1].in_stock)
        }

    
    },[Product])


    const clearInputs = ()=>{
        setNewActive(false)
        setNewINStock(false)
        setNewName('')
        setNewPrice('')
    }
    


    const Delay = function(){
        let data = setTimeout(()=>{
            return (
                <div className="Test">
                    <h2 style={
                        {"marginTop":'30px'}
                        
                    }>{Name}</h2>
                </div> 
            )
        },5000)

        console.log(data);

    }


    const setCss = ()=>{

        cssStyles.current.style.backgroundColor = 'red'

    }

  return (
    <>

        {/* {setTimeout(()=>{
            console.log('5555');

        },5000)} */}
        <div className='productContainer'>
        {Show?(
            <>
                <div className="productHeader">
                    <h2 className='productTitle'>Product</h2>
                    <button onClick={()=>setShowModal(true)} className="productBtn">Create</button>
                </div>
        
                <div ref={cssStyles} className="productInfo">
                    <div className="productInfoLeft">
                        <Chart title='Sell in Month' Data={Data.slice(Product[1].id,Product[1].id + 3)} dataKey='name' debounce={300} aspect={4}></Chart>                        )

                    </div>
                    <div className="productInfoRight">
                        <div className="productInfoTop">
                            <img src={Product[1].avata} className='productInfoImg' alt="" />
                            <h3 className='productName'>{Product[1].name}</h3>
                        </div>
                        <div className='productDetail'>
                            <div className="productDetailKey">ID:</div>
                            <div className="productDetailVal">{Product[1].id}</div>
                        </div>
                        <div className='productDetail'>
                            <div className="productDetailKey">Name:</div>
                            <div className="productDetailVal">{Product[1].name}</div>
                        </div>
                        <div className='productDetail'>
                            <div className="productDetailKey">Sales:</div>
                            <div className="productDetailVal">{Product[1].price}$</div>
                        </div>
                        <div className='productDetail'>
                            <div className="productDetailKey">Active:</div>
                            <div className="productDetailVal">{Product[1].active?('Yes'):('No')}</div>
                        </div>
                        <div className='productDetail'>
                            <div className="productDetailKey">In Stock:</div>
                            <div className="productDetailVal">{Product[1].in_stock?('Yes'):('No')}</div>
                        </div>
                    </div>
                </div>
        
                <div ref={cssStyles} className="productControl">
                    <form className="productForm" onSubmit={(e)=>{
                        e.preventDefault()
                        let items = 
                            {
                                id:Product[1].id,
                                avata:Product[1].avata,
                                price:Product[1].price,
                                active:Active,
                                in_stock:InStock,
                                name:ProductName,
                                                            
                            }
                        async function fetchData(){
                            await fetch(`https://dashboard-admin-678c2-default-rtdb.firebaseio.com/products/${Product[0]}.json`,{
                                method:'PUT',
                                body:JSON.stringify(items)
                                
                            })
                            setGetData(preval=>!preval)
                               
                            
                        } 
                        fetchData()
                    }}>
                        <div className="formLeft">
                            <div className="formInput">
                                <label>Products Name</label>
                                <input onChange={(e)=>setProductName(e.target.value)} value={ProductName} type="text" />
                            </div>
                            <div className="formInput">
                                <label>Active</label>
                                <select value={Active?('yes'):('no')} onChange={(e)=>{
                                    let result = false
                                    if (e.target.value==='yes'){
                                        result = true
                                                                
                                    }else{
                                        result = false
                                        
                                    }
                            
                                    setActive(result)
                                }}>
                                    <option value="yes">YES</option>
                                    <option value="no">NO</option>
                                </select>
                            </div>
                            <div className="formInput">
                                <label>In Stock</label>
                                <select value={InStock?('yes'):('no')} onChange={(e)=>{
                                    let result = false
                                    if (e.target.value==='yes'){
                                        result = true
                                        
                                    }else{
                                        result = false
                                        
                                    }

                                    setInStock(result)
                                    
                                    }}>
                                    <option value="yes">YES</option>
                                    <option value="no">NO</option>
                                </select>
                            </div>
                        </div>
                        <div className="formRight">
                            <div className="imageContainer">
                                <img  id='editImage' src={Product[1].avata} alt="" className='formRightImg' />
                                <input onChange={()=>{
                                    let iconPublish = document.getElementById('iconPublish')
                                    iconPublish.style.color = 'green'                      
                                }} id='input_image' type="file" style={{display:'none'}} />
                                <Publishicon  id='iconPublish' onClick={()=>{
                                    let inputElement = document.getElementById('input_image')
                                    inputElement.click()
                                }} style={{cursor:'pointer',fontSize:'32px'}}></Publishicon>
                            </div>
                            <button  onClick={()=>{
                                let inputElement = document.getElementById('input_image')
                                console.log(inputElement.files);

                            }} className='uploadProduct'>Upload (Edit)</button> 
                        </div>
                    </form>
                </div>


                {/* <button onClick={setCss}>Add Css</button> */}
            </>
        ):('Loading ... ')}
        </div>
        {ShowModal?(

            <div className='modal'>
                <div className="modalContainer modalActive">
                    <div className="modalHeader">
                        <h3 className='modalTitle'>Create a new Product</h3>
                        <CloseIcon onClick={()=>setShowModal(false)} className='modalClose' />
                    </div>
                    <div >
                        <form className="modalBody" onSubmit={(e)=>e.preventDefault()} action="">
                            <div className="inputContainer">
                                <label htmlFor="">Producet name</label>
                                <input onChange={(e)=>setNewName(e.target.value)} value={NewName} type="text" />
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="">Price</label>
                                <input onChange={(e)=>setNewPrice(e.target.value)} value={NewPrice} type="text" />
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="">Active</label>
                                <select  onChange={(e)=>{
                                    let result;
                                    if (e.target.value=='yes'){
                                        result=true

                                    }else{
                                        result = false
                                    }
                                    setNewActive(result)
                                }} value={NewActive?'yes':'no'} name="" id="">
                                    <option value="yes">YES</option>
                                    <option value="no">NO</option>
                                </select>
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="">In stock</label>
                                <select  onChange={(e)=>{
                                    let result;
                                    if (e.target.value=='yes'){
                                        result=true

                                    }else{
                                        result = false
                                    }
                                    setNewINStock(result)
                                }} value={NewINStock?'yes':'no'}name="" id="">
                                    <option value="yes">YES</option>
                                    <option value="no">NO</option>
                                </select>
                            </div>
                            <div className="modalFooter">
                                <button onClick={()=>{
                                    setShowModal(false)

                                }} className='modalBtn btnClose'>Close</button>
                                <button onClick={()=>{
                                    let newItem = {
                                        id : Products.length+1,
                                        name:NewName,
                                        price:NewPrice,
                                        active:NewActive,
                                        in_stock:NewINStock,
                                        avata:"/images/iphone-11.avif"
                                    }
                                    fetch('https://dashboard-admin-678c2-default-rtdb.firebaseio.com/products.json',{
                                        method:'POST',
                                        body:JSON.stringify(newItem)
                                    })

                                    setShowModal(false)
                                    clearInputs()
                                    setGetData(preVal=>!preVal)
                                }} className='modalBtn btnSend'>Send</button>

                            </div>
                        </form>
                    </div>
                </div>
                
            </div>

        ):('')}
        
    </>
    
  )
}
