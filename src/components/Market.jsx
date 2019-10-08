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
      <Fruits fruits={stock.fruits} addToCart={addToCart} />
      <Fruits fruits={stock.meats} addToCart={addToCart} />
      <Cart items={cart} />
    </div>
  );
}

function Cart(props) {
  const { items } = props;
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

function Fruit(props) {
  const { name, addToCart } = props;
  return (
    <div>
      <span>{name}</span>
      <button onClick={() => addToCart(name)}>Add To Cart</button>
    </div>
  );
}

function Fruits(props) {
  const { fruits, addToCart } = props;
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
