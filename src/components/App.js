import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
//we must import sampleFishes
import sampleFishes from  '../sample-fishes';
//import Fish component
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
    constructor() {
        super();

        this.addFish = this.addFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
        this.addToOrder = this.addToOrder.bind(this);

        this.state = {
            fishes: {},
            order: {}
        };
    }

    componentWillMount() {
        //this runs right before <App> is rendered
      this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
          context: this,
          state: 'fishes'
      });

      //check if there is any refernce in localStorage
      const localStorageRef = localStorage.getItem(`order-${this.props.match.params.storeId}`);

      if(localStorageRef) {
         // update our App component's order state
            //however we must convert string back to object with JSON.parse
         this.setState({
             order: JSON.parse(localStorageRef)
         });
      }

    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    //what we need to do is whenever order state is updated we need to store it in local storage.
    //when someone loads page for first time, we're going to check to see if something is in local storage. If there is something in local storage, we're going to restore our state via one of the above lifecycle hooks.

    //the lifecycle hook omponentWillUpdate runs when either props or state changes
        //NOTE: conside using the lifecycle hook "shouldComponentUpdate". This will fix issue where there is a double render when page loads.
    componentWillUpdate (nextProps, nextState) {
        // console.log('Something changed');
        // console.log({nextProps, nextState});

        //you cannot store an object, only a string. Thus we need to convert to JSON with JSON.stringify.
        localStorage.setItem(`order-${this.props.match.params.storeId}`, JSON.stringify(nextState.order));

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
                <Order
                    fishes={this.state.fishes}
                    order={this.state.order}
                    params={this.props.match.params}
                />
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
            </div>
        )
    }
}

export default App;
