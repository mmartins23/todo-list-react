import './App.css';
import { useState } from 'react';

function App() {
  const [newItem, setNewItem] = useState('');

  return (
    <>
      <form className='new-item-form'>
        <div className='form-row'>
          <label htmlFor='item'>New Item</label>
          <input 
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type='text' 
          id='item'></input>
        </div>
        <button className='btn'>Add</button>
      </form>
      <h1>Todo List</h1>

      <ul className='list'>
        <li>
          <label>
            <input type='checkbox'/>
            Item
          </label>
          <button className='btn btn-danger'>Delete</button>
        </li>
      </ul>
    </>
  );
}

export default App;
