import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
//we must import sampleFishes
import sampleFishes from  '../sample-fishes';
//import Fish component
import Fish from './Fish';

class App extends React.Component {
    constructor() {
        super();

        this.addFish = this.addFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
        //we must bind 'this' to addToOrder() just like we did with addFish and loadSamples above.
        this.addToOrder = this.addToOrder.bind(this);
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

    loadSamples() {
        this.setState({
            fishes: sampleFishes
        });
    }

    addToOrder(key) {
        //take a copy of state
        const order = {...this.state.order};
        //update order or add the new number of fish ordered
        order[key] = order[key] + 1 || 1;
        //update state
        this.setState({ order });
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="list-of-fishes">
                        {
                            Object
                                .keys(this.state.fishes)
                                .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
                        }
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
            </div>
        )
    }
}

export default App;
