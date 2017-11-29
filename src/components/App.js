import React from 'react';
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
    //use a constructor method to set state: a fish state and an order state.
    constructor() {
        super();

        this.addFish = this.addFish.bind(this);
        //initial state (getinitialstate)
        this.state = {
            fishes: {},
            order: {}
        };
    }

    //now we need to pass state down stream to the chilcren. We do this with a method calld "addFish"
    //how do I call the addFish function from a child component (e.g. Inventory)?
    addFish(fish) {
        //update state
            //to update state we must first make a copy of current state (do not update state directly)
        const fishes = {...this.state.fishes}; // ... is a spread that makes a copy of existing state and puts into 'fishes'

        //add in new fish
        const timestamp = Date.now();
        // we are taking fish object from AddFishForm component and passing to this method.
        fishes[`fish-${timestamp}`] = fish;

        //set state - we tell react that we have updated a particular piece of state
        this.setState({ fishes })  //in ES6 fishes: fishes can be just fishes.
    }

    //how do I call the addFish function from a child component (e.g. Inventory)?
        //addFish={this.addFish} in Inventory jsx element below. addFish is now passed down via props.
        //Note - we also now need to pass addFish() in the AddFishForm jsx element within the Inventory component as well .
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                </div>
                <Order />
                <Inventory addFish={this.addFish} />
            </div>
        )
    }
}

export default App;
