import React, {useState} from "react";

function ToyCard({toy, handleDeleteItem}) {

  const {id, name, image, likes} = toy;
  const [updateLikes, setUpdateLikes] = useState(likes);

  function handleDeleteClick(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then( () => handleDeleteItem(toy));
  }

  function handleLikes(){
    setUpdateLikes( (updateLikes) => updateLikes + 1);

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({likes: likes + 1})
    })
    .then(r => r.json())
    .then();
  }

  return (
    <div className="card">
      <h2>{name/* Toy's Name */}</h2>
      <img
        src={image /* Toy's Image */}
        alt={name /* Toy's Name */}
        className="toy-avatar"
      />
      <p>{updateLikes /* Toy's Likes */} Likes </p>
      <button className="like-btn" onClick={handleLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
