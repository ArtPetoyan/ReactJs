import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Contacts from './Components/Contacts';
import NotFound from './Components/NotFound';
import View from './Components/View';
import MainLayout from './layouts/MainLayout';
import AddUser from './Components/AddUser';
import Edit from './Components/Edit';
function App() {
    let [user, setUser] = useState([]);
    let [id, setId] = useState(0);

    function EditElem(index, elem) {
      let first = user.slice(0, index - 1);
      let last = user.slice(index, user.length);
      setUser([].concat(first, elem, last));
    }
    function Delete(id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE',
      })
      .then(response => {
        if(!response.ok) {
          throw new Error("Error deleting user");
        }
        setUser(user.filter(el => el.id !== id));
        setId(id);
      })
      .catch(err => {
        alert(err.message);
      });
    }
    const add = async (person) => {
    try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
        method: 'POST',
        body: JSON.stringify(person),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      });
      if (!response.ok) {
        throw new Error("Error creating user");
      }
      const newUser = await response.json();
      setUser([...user, newUser]);
    } catch (er) {
      alert(er.message);
    }
    };

    useEffect(() => {
      fetchData();
    }, [])
    const fetchData = async () => {
      await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if(!response.ok) {
          throw new Error("Error fetching users");
        }
        return response.json();
      })
      .then(json => {setUser(json)})
      .catch(err => {
        alert(err.message);
      });
    };
  return (
    <BrowserRouter>
    <div className="App">
    {!user && <div className="divLoad"></div>}
    {!!user && 
      <Routes>
        <Route element={<MainLayout/>} path="/">
          <Route element={<Home 
            user={user} 
            onClick={(id) => setId(id)}
            deleteUser={Delete}/>} index >
          </Route>
          <Route element={<About/>} path="about"/>
          <Route element={<Contacts/>} path="contacts"/>
          <Route element={<NotFound/>} path="*"/>
          <Route element={<AddUser onClick={add}/>} path='addUser'/>
          <Route element={<View id={id} />} path='view'/>
          <Route element={<Edit id={id} onClick={EditElem}/>} path='edit'/>
        </Route>
      </Routes>
    }
    </div>
    
    </BrowserRouter>
  );
}

export default App;
