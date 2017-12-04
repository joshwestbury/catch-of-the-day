import React from 'react';
import AddFishForm from './AddFishForm';


//now we must add our inventory management system.
    //first we loop over all of the fishes we have with {Object.keys(this.props.fishes).map(this.renderInventory))}
        //NOTE that we first passed down the fishes to our inventory state in App.js.
class Inventory extends React.Component {
    constructor () {
        super();
        this.renderInventory = this.renderInventory.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, key) {
        const fish = this.props.fishes[key];
        //take a copy of that fish and update it with new data
        const updatedFish = {
            ...fish, // copy fish with spread operator

            //now overlay our new properties on top of it.
                //e.target gives us the element itself, and 'name' is the property. e.target.value is the new properties that will be overlayed.
                //we use a 'computed property' where the property we are changings is e.target.name, and it will be replaced with whatever has changed - i.e. value e.target.value.
            [e.target.name]: e.target.value
            ////now we must take updatedFish and pass it to App.js
        }
        //now we pass the updated fish object back.
        this.props.updateFish(key, updatedFish);
    }


    renderInventory(key) {
        const fish = this.props.fishes[key];
        //listen for change on each input. When input is changed we need to update corresonding state.
        return (
            <div className='fish-edit' key={key}>
                <input type='text' name='name' value={fish.name} placeholder='Fish Name' onChange={(e) => this.handleChange(e, key)}/>
                <input type='text' name='price' value={fish.price} placeholder='Fish Price' onChange={(e) => this.handleChange(e, key)}/>
                <select type='text' name='status' value={fish.status} placeholder='Fish Status' onChange={(e) => this.handleChange(e, key)}>
                    <option value='available'>Fresh</option>
                    <option value='unavailable'>Sold Out!</option>
                </select>
                <textarea type='text' name='desc' value={fish.desc} placeholder='Fish Desc' onChange={(e) => this.handleChange(e, key)}></textarea>
                <input type='text' name='image' value={fish.image} placeholder='Fish Image' onChange={(e) => this.handleChange(e, key)}/>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h2>Inventory</h2>
                {Object.keys(this.props.fishes).map(this.renderInventory)}
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
            </div>
        )
    }
}

export default Inventory;
