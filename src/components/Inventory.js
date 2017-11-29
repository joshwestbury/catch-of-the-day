import React from 'react';
import AddFishForm from './AddFishForm';

//add a button to load sample fish data.
    //when button is clicked it should run the loadSamples() function.
    //loadSamples is declared on state in App.js and passed via props to Inventory.js
class Inventory extends React.Component {
    render() {
        return (
            <div>
                <p>Inventory</p>
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
            </div>
        )
    }
}

export default Inventory;
