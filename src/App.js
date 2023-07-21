import './App.css';
import Nav from './view/Nav';
import React, { useState } from 'react';
import Todos from './view/Todos';
import Radio from './view/RadioBox';
import Checkbox from './view/CheckBox';
import Content from './view/useEffects';
import Course from './view/useMemo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  let [name, setName] = useState('Le Quang Diep');
  let [address, setAdrress] = useState('');
  let [newState, setNewState] = useState([
    { id: 1, title: 'Javascript', type: 'eric' },
    { id: 2, title: 'PHP', type: 'diep' },
    { id: 3, title: 'ReactJS', type: 'eric' },
    { id: 4, title: 'Java', type: 'diep' },
  ]);
  const handleOnchange = (event) => {
    setAdrress(event.target.value)
  }

  const handleClick = () => {
    setNewState([...newState, { id: Math.floor(Math.random() * 10), title: address, type: 'eric' }])
    setName(address)
  }

  let handleDelete = (id) => {
    let todos = newState.filter((items) => items.id !== id)
    setNewState(todos)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <header className="App-header">
          <Routes>
            <Route path="/" element={
              <div>
                <Todos
                  newStates={newState}
                  handleDelete={handleDelete}
                />
                <Todos
                  newStates={newState.filter(items => items.type === 'eric')}
                  handleDelete={handleDelete}
                />
                <p>20115001-DHTH16H-{name}</p>
                <input type="text" value={address} onChange={(event) => handleOnchange(event)} />
                <button onClick={handleClick}>Click me</button>
              </div>}
            />
            <Route path="/radio" element={<Radio />} />
            <Route path="/checkbox" element={<Checkbox />} />
            <Route path="/content" element={<Content />} />
            <Route path="/course" element={<Course />} />
          </Routes>
        </header>
      </BrowserRouter>
    </div >
  );
}

export default App;
