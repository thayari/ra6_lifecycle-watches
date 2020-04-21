import React, { useState } from 'react';
import {nanoid} from 'nanoid';

const timecodes = ['0', '+01', '+02', '+03', '+04', '+05', '+06', '+07', '+08', '+09', '+10', '+11', '+12', '-01', '-02', '-03', '-04', '-05', '-06', '-07', '-08', '-09', '-10', '-11', '-12']

function Form({ onAdd }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({...form, id: nanoid()});
  }

  const [form, setForm] = useState({
    title: '',
    timezone: '0',
  })

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setForm(prevForm => ({ ...prevForm, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-auto form-group">
          <label htmlFor="title">Название</label>
          <input className="form-control" type="text" name="title" id="title" onChange={handleChange}></input>
        </div>
        <div className="col-auto form-group">
          <label htmlFor="timezone">Временная зона</label>
          <select className="form-control" name="timezone" id="timezone" onChange={handleChange}>
            {timecodes.map((item) => (<option key={item}>{item}</option>))}
          </select>
        </div>
      </div>
      
      <button type="submit" className="btn btn-primary">Добавить</button>
    </form>
  )
}

export default Form
