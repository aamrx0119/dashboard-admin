import React from 'react'
import './Cards.css'

export default function Cards(props) {
    let iconProp = props.icon
  return (
    <div className="card">
                
        <div className="cardTitle">Cost</div>
        <div className="analyices">

                <span className='price '>100$</span>
                <div className={`card-icons ${props.status==='green'?"active":""}`}>

                <span>+2.4</span>
                {iconProp}
                </div>
            </div>
        <div className="cardFooter">
            <p>Comare to last month</p>
        </div>
    </div>
  )
}
