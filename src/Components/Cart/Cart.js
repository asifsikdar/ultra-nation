import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const population = cart.reduce((sum, country) =>country.population, 0);
    return (
        <div>
            <h1>Cart-Total :{cart.length}</h1>
            <h3>Population :{ population}</h3>
        </div>
    );
};

export default Cart;