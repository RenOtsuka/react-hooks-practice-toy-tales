import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {

  const [showForm, setShowForm] = useState(false);
  const [newToyName, setNewToyName] = useState("");
  const [newToyImg, setNewToyImg] = useState("");
  
  const [toyList, setToyList] = useState([]);
  

  useEffect( () => {
    fetch(`http://localhost:3001/toys`)
    .then(r => r.json())
    .then(data => setToyList(data))
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleToyName(e){
    setNewToyName(e.target.value);
  }

  function handleToyImg(e){
    setNewToyImg(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();

    fetch(`http://localhost:3001/toys`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name: newToyName,
        image: newToyImg,
        likes: 0,
      })
    })
    .then(r => r.json())
    .then(data => setToyList([...toyList, data]))

    setNewToyName("");
    setNewToyImg("");
  }

  function handleDeleteItem(deletedItem){
    const newList = toyList.filter( toy => toy.id !== deletedItem.id);
    setToyList(newList);
  }

  return (
    <>
      <Header />
      {showForm 
      ? <ToyForm 
      newToyName={newToyName}
      newToyImg={newToyImg}
      handleToyName={handleToyName}
      handleToyImg={handleToyImg}
      handleSubmit={handleSubmit}
      /> 
      : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
      toyList={toyList}
      handleDeleteItem={handleDeleteItem}
      />
    </>
  );
}

export default App;
