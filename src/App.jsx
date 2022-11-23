import React from "react";
import Card from "./components/Card";
import { products } from "./components/List";
import "./App.css";

function App() {
  return (
    <div className="App">
      {products.map((item) => (
        <Card
          img={item.image}
          name={item.name}
          price={item.price}
          left={item.left}
          id={item.id}
        />
      ))}
    </div>
  );
}

export default App;
