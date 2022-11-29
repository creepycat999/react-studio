import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function total(count, setCount, item){
  setCount(count + (item.price))
}
function addBaked(cart, setCart, item){
  setCart(cart + (item.name) + ", ")
}

function App() {

  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  //const listItems = cart.map((d) => <li key={d.name}></li>);

  return (
    <div className="App">
      <h1>Baked Bakery</h1>
      <div ClassName = "outerFlex">
        <div ClassName="bakedItem">
        {/* TODO: personalize your bakery (if you want) */}
        {bakeryData.map((item, index) => 
        ( // TODO: map bakeryData to BakeryItem components
          [<p>{BakeryItem(item)} </p>, // replace with BakeryItem component
          <button onClick={() => {
            total(count, setCount, item); 
            addBaked(cart, setCart, item);
          }}>Add to Cart</button>] ))}
        
      <div>
        <h2>Cart:</h2>
        <p>{cart}</p>
        <div>
			    <h2>Total: ${count}</h2>
		    </div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
