import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} from '../../store/slices/cartSlice';
const cartStyle = {
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  maxWidth: '600px',
  margin: 'auto',
  backgroundColor: '#f9f9f9',
  paddingTop: '70px',
};

const titleStyle = {
  textAlign: 'center',
  marginBottom: '20px',
};

const listStyle = {
  listStyleType: 'none',
  padding: '0',
};

const itemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px',
  borderBottom: '1px solid #ccc',
};

const buttonStyle = {
  marginLeft: '10px',
  backgroundColor: '#ff2929',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  padding: '5px 10px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};
const smallbuttonStyle = {
  marginLeft: '10px',
  backgroundColor: 'green',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  padding: '5px 10px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const clearButtonStyle = {
  marginTop: '20px',
  backgroundColor: '#48bd69',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  padding: '10px 20px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.total);
  return (
    <div>
      <Navbar />
      <div style={cartStyle}>
        <h2 style={titleStyle}>Your Cart</h2>
        <ul style={listStyle}>
          {cartItems.map((product) => (
            <li key={product.id} style={itemStyle}>
              <span>
                {product.name} - ${product.price} X {product.quantity}
              </span>
              <div>
                <button
                  style={smallbuttonStyle}
                  onClick={() => dispatch(incrementQuantity(product))}
                >
                  +
                </button>
                <button
                  style={smallbuttonStyle}
                  onClick={() => dispatch(decrementQuantity(product))}
                >
                  -
                </button>
                <button
                  style={buttonStyle}
                  onClick={() => dispatch(removeFromCart(product))}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <h3>Total : $ {total} </h3>
        <button style={clearButtonStyle} onClick={() => dispatch(clearCart())}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
