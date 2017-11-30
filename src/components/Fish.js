//create Fish component

import React from 'react';
import { formatPrice } from '../helpers';


class Fish extends React.Component {
    render() {
        const details = this.props.details;
        //check to see if details.status is available
        const index = this.props.index;
        //this.props.index holds a key is being passed down from App.js. 
        const isAvailable = details.status === 'available';
        //check to see if buttonText is available. Note that the following conditional uses a ternerary operator (?).
        const buttonText = isAvailable ? 'Add to Order ' : 'Sold Out!';
        //next disable button if sold out. (see disabled attribute on <button> )
            //if the order is not available, react will toggle disabled attribute on and off.

        //how does addToOrder() dynamically execute no matter what fish is clicked on.
            //we must pass in a key, which is set as a prop on App.js (index={key})
        return (
            <li className = 'menu-fish'>
                <img src={details.image} alt={details.name} />
                <h3 className = 'fish-name'>
                    {details.name}
                    <span className = 'price'>{formatPrice(details.price)}</span>
                </h3>
                <p>{details.desc}</p>
                <button onClick = {() => this.props.addToOrder(index)} disabled={!isAvailable}>{buttonText}</button>
            </li>
        )
    }
}

export default Fish;
