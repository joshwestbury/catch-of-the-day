import React from 'react';
//getFunName is what's called a "named import".
//note that the two dots before /helpers is because the helpers.js file is two levels up in the file tree.
import {getFunName} from '../helpers.js';


class StorePicker extends React.Component {
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }

    goToStore(event){
        console.log("You changed the URL");
        //first: grab the text from the box

        //this.storeInput returns undefined because 'this' is not bound to StorePicker.

        //the react Class (e.g. in my case StorePicker) does not implicitly bind 'this' to all my methods on my component (StorePicker). To get 'this' to equal StorePicker we must include a constructor that sets this.goToStore = this.goToStore.bind(this) (see below). Or, you can do it when the method is called within the render function (see below). Another way is to use an arrow function, e.g. onSubmit={(event) => this.goToStore(event)}. The downside to binding 'this' when method is called (as opposed to the constructor) is that if the component is used multiple times on a page, you would need to repeate the code, whereas the constructor is written once.

        //lastly, .value is used because at this point storeInput is simply an HTML element and we therefore have access to the value attribute.
        console.log(this.storeInput.value);
        //second: transition from / to /store/:storeId

    }

    //render is bound to the component, which allows me to use the 'this' keyword withnin the render function.

    //use a 'ref' attribute allows us to get data out of an input element. 'ref' allows us to reference the actual input.
    //NOTE current react uses function refs, where ref={function}

    //What is ref doing?
    //when input is rendered onto the page, its going to put a reference to the input on the class itself

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
