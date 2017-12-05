import React from 'react';
import {getFunName} from '../helpers.js';


class StorePicker extends React.Component {

    goToStore(event){
        console.log("You changed the URL");
        console.log(this.storeInput.value);
        const storeId = this.storeInput.value;
        this.props.history.push(`/store/${storeId}`)
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
                <button type="submit">Visit Store →</button>
            </form>
        )
    }
}

export default StorePicker;
