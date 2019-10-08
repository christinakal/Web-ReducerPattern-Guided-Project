import React, { useState } from 'react';

export default function Market() {
  const [stock] = useState({
    fruits: ['pear', 'mango', 'banana', 'kiwi'],
    meats: ['beef', 'chicken', 'fish'],
  });
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(cart.concat(item));
  };

  return (
    <div className="component">
      <FruitsList fruits={stock.fruits} addToCart={addToCart} />
      <FruitsList fruits={stock.meats} addToCart={addToCart} />
      <Cart items={cart} />
    </div>
  );
}

function Cart({ items }) {
  return (
    <>
      <h5>Cart:</h5>
      {
        items.length
          ? items.map((item, idx) => <div key={idx}>{item}</div>)
          : <div>Nothing in the cart. Sad!</div>
      }
    </>
  );
}

function Fruit({ name, addToCart }) {
  return (
    <div>
      <span>{name}</span>
      <button onClick={() => addToCart(name)}>Add To Cart</button>
    </div>
  );
}

function FruitsList({ fruits, addToCart }) {
  return (
    <>
      {
        fruits.map(
          (fruitName) => (
            <Fruit
              key={fruitName}
              name={fruitName}
              addToCart={addToCart}
            />
          ))
      }
    </>
  );
}
