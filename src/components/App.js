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

    loadSamples() {
        this.setState({
            fishes: sampleFishes
        });
    }

    //call Fish component within an <ul> in jsx.

    //we need to loop over every single element in state to render all of the Fish data.
        //typically we would loop over data with .map(), but the map function only works with arrays.
        //therefore we must use Object.keys() which will return an array of all of the keys of the objec that is passed into it (e.g. Object.keys(this.state.fishes) )
        //additionally we must inclide a unique key for each fish (key={key}).
        //whatever fish we currently have then needs to pass all of the data about the fish to our Fish component. This is done via details property within .map() (NOTE in .fishes[key], the key refers to single fish)
            //in react dev tools go to Fish and you will see under props there is a details prop.
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="list-of-fishes">
                        {
                            Object
                                .keys(this.state.fishes)
                                .map(key => <Fish key={key} details={this.state.fishes[key]}/>)
                        }
                    </ul>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
            </div>
        )
    }
}

export default App;
