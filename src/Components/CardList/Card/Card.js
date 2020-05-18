import React from 'react'
import './Card.css'
export default function Card(props) {
    return (
        <div className='card'>
            <div className="monsters">


                  {props.children}
     
            </div>
        
        </div>
    )
}
