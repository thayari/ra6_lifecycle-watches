import React, { useState } from 'react'
import Form from './Form';
import Clock from './Clock';
import Clocks from './Clocks';

function ClocksApp() {
    const [clock, setClock] = useState([]);

    const handleAdd = (obj) => {
        setClock(prevState => [...prevState, obj]);
      }
    
    const handleRemove = (id) => {
        setClock(prevState => prevState.filter(item => item.id !== id))
    }

    return (
        <div className="container">
            <Form onAdd={handleAdd} />
            <Clocks>
                {clock.map(item => <Clock key={item.id} id={item.id} title={item.title} timezone={item.timezone} onRemove={handleRemove} />)}
            </Clocks>
        </div>
    )
}

export default ClocksApp
