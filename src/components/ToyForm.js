import React from "react";

function ToyForm({newToyName, newToyImg, handleToyName, handleToyImg, handleSubmit}) {

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}> 
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          value={newToyName}
          className="input-text"
          onChange={handleToyName}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          value={newToyImg}
          className="input-text"
          onChange={handleToyImg}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
