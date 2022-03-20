import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyList, handleDeleteItem}) {

  const toys = toyList.map( toy => (
    <ToyCard 
    key={toy.id} 
    toy={toy} 
    handleDeleteItem={handleDeleteItem}
    />
  ));

  return (
    <div id="toy-collection">{toys}</div>
  );
}

export default ToyContainer;
