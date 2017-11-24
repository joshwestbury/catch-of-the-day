import React from 'react';
//getFunName is what's called a "named import".
//note that the two dots before /helpers is because the helpers.js file is two levels up in the file tree.
import {getFunName} from '../helpers.js';


class StorePicker extends React.Component {
    render() {
        return (
            <form className="store-selector">
                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} />
                <button type="submit">Visit Store →</button>
            </form>
        )
    }
}

export default StorePicker;
