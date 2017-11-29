//create Fish component

import React from 'react';

// the formatPrice() function takes care of formating the price.
//Note that details.price is then passed through formatePrice in jsx.
import { formatPrice } from '../helpers';

//Since we are looping over the fishes in App.js we can now access the specific details of the fish in jsx.
    //NOTE: to put a variable in jsx we need to put it into {} brackets

//
class Fish extends React.Component {
    render() {
        //simplify code by assigning this.props.details to details. Otherwise we would have to call this.props.details.... every time.
        const details = this.props.details
        return (
            <li className = 'menu-fish'>
                <img src={details.image} alt={details.name} />
                <h3 className = 'fish-name'>
                    {details.name}
                    <span className = 'price'>{formatPrice(details.price)}</span>
                </h3>
                <p>{details.desc}</p>
                <button>Add to Order</button>
            </li>
        )
    }
}

export default Fish;
