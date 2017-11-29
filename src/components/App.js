import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
//we must import sampleFishes
import sampleFishes from  '../sample-fishes';

class App extends React.Component {
    constructor() {
        super();

        this.addFish = this.addFish.bind(this);
        //we must bind 'this' to loadSamples() just like we did with addFish above.
        this.loadSamples = this.loadSamples.bind(this);
        //initial state (getinitialstate)
        this.state = {
            fishes: {},
            order: {}
        };
    }

    addFish(fish) {
        //update state
        const fishes = {...this.state.fishes};

        //add in new fish
        const timestamp = Date.now();
        // we are taking fish object from AddFishForm component and passing to this method.
        fishes[`fish-${timestamp}`] = fish;

        //set state - we tell react that we have updated a particular piece of state
        this.setState({ fishes })
    }

    //after declaring loadSamples we must pass it down to the Inventory component through
    //props by adding to the <Inventory/> jsx element below
    loadSamples() {
        this.setState({
            fishes: sampleFishes
        });
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
            </div>
        )
    }
}

export default App;
