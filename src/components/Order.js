import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
    constructor () {
        super();
        this.renderOrder = this.renderOrder.bind(this);
    }
    renderOrder(key) {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];

        if(!fish || fish.status === 'unavailable') {
            return <li key={key}> Sorry, {fish ? fish.name : 'fish'} is no longer available! </li>
        }

        return (
            <li key={key}>
                <span>{count}lbs {fish.name}</span>
                <span className='price'>{formatPrice(count * fish.price)}</span>
            </li>
        )
    }

    render() {
        //get an array of all of the keys in order
            //Object.keys method returns an array of an object's keys.
        const orderIds = Object.keys(this.props.order);

        //reduce orderIds that will return a sum of  all the orders.
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key]; //how many are in the order
            const isAvailable = fish && fish.status === 'available'; //check to see if there is a  fish  and if it is available?
            if(isAvailable) {
                return prevTotal + (count * fish.price || 0) //add up the total  -- || 0 protects against cases where a fish may have been deleted from order.
            }
            //if its available we return new amount (i.e. total) otherwise we return the previous amount (prevTotal).
            return prevTotal;
        }, 0)
        //total is then passed into jsx wrapped in the formatPrice function.

        //Now we must display out each individual fish in our order. Although we could make a new component to do this, we can also use a "render function".
            //Sometimes it doesn't make sense to make a new component. So we can shell out some of this work to a seperate render function that lives inside of our Order.js component. So we will create a renderOrder function above, and pass it into a map() function in <ul>
        return(
            <div className='order-wrap'>
                <h2>Your Order</h2>
                <ul className='order'>
                    {orderIds.map(this.renderOrder)}
                    <li className='total'>
                        <strong>Total:</strong>
                        {formatPrice(total)}
                    </li>
                </ul>


            </div>
        )
    }
}

export default Order;
