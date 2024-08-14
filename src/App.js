import './App.css';
import Addwork from './components/Addwork';
import Footer from './components/Footer';
import Header from './components/Header';
import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import About from './components/About';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

function App() {

  let initAddworks;

  if (localStorage.getItem("addworks") === null) {
    initAddworks = [];
  } else {
    initAddworks = JSON.parse(localStorage.getItem("addworks"));
  }

  // Function to delete a to-do item
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);

    setAddworks(addworks.filter((e) => e !== todo));
    localStorage.setItem("addworks", JSON.stringify(addworks)); // Update localStorage
  };

  // Function to add a new to-do item
  const addTodo = (title, description) => {
    console.log("I am adding this todo", title, description);

    // Generate a unique ID for the new todo item
    let no = addworks.length > 0 ? addworks[addworks.length - 1].no + 1 : 1;

    // Create the new todo item
    const myAddworks = {
      no: no,
      title: title,
      description: description,
    };

    // Update the state by adding the new todo to the existing array
    setAddworks([...addworks, myAddworks]);
  };

  const [addworks, setAddworks] = useState(initAddworks);

  useEffect(() => {
    localStorage.setItem("addworks", JSON.stringify(addworks));
  }, [addworks]);

  return (
    <>
      <Router>
        <Header title='Add works' searchbar={false} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Addwork addworks={addworks} onDelete={onDelete} />
              </>
            }
          />
          <Route exact path='/About' element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

