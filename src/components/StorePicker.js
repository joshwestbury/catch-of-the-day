import React from 'react';
//getFunName is what's called a "named import".
//note that the two dots before /helpers is because the helpers.js file is two levels up in the file tree.
import {getFunName} from '../helpers.js';




class StorePicker extends React.Component {

    goToStore(event){
        console.log("You changed the URL");
        //first: grab the text from the box

        console.log(this.storeInput.value);
        //second: transition from / to /store/:storeId
        const storeId = this.storeInput.value;
        this.props.history.push(`/store/${storeId}`)

        //this.props.location
        //this.props.match
        // this.context.router.transitionTo(`/store/${storeId}`)

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

// StorePicker.contextTypes = {
//     router: React.PropTypes.object
// }

export default StorePicker;
