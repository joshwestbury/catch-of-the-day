import React from 'react';
import AddFishForm from './AddFishForm';


//this.props.addFish is passed to the AddFishForm element from App.js.
    //props is the way we pass things down (wheather it's data or referents) across components is thorugh props.
class Inventory extends React.Component {
    render() {
        return (
            <div>
                <p>Inventory</p>
                <AddFishForm addFish={this.props.addFish} />
            </div>
        )
    }
}

export default Inventory;
