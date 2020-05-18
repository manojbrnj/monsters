import React from 'react'
import Card from './Card'
import './CardList.css'
export default function CardList(props) {
    return (
        <div className='cardlist'>
        
            <div className="card-cotainer">
            {
   props.monsters.map( item => (<Card key={item.id}>
       <img src={`https://robohash.org/1?set=set${item.id}`} alt="robo2" className='avatar'/>
       <h3>{item.name}</h3>
       <h4>
           {item.email}
       </h4>
       </Card>) )
             }
            </div>
           
            
        </div>
    )
}
