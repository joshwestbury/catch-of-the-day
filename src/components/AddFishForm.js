import React from 'react';



class AddFishForm extends React.Component {
//First: create an 'add fish' form that
//Second: when someone clicks the button 'Add Item' a fish object is created that takes all of the data and puts it into an object for us.

    // create a createFish() method
    createFish(event) {
        event.preventDefault();
        console.log('Gonna Make some Fish');
        //next we must take all of the input from form fields and put it into an object.
        //first, create a fish object and use 'ref' in jsx.
        const fish = {
            name: this.name.value,
            price: this.price.value,
            status: this.status.value,
            desc: this.desc.value,
            image: this.image.value,
        }
        //next we must get this fish object into our state
                //NOTE: state is always tied to a specific compondent but often components need to share state.
                //Here we are going to set state in the parent app.js and pass it down to the children components.

        //now we call addFish() form App.js and pass in the fish object.
        this.props.addFish(fish);
        //use vanilla js to rest the form once a fish has been entered.
            //fishForm is put on the form itself with a 'ref' attribute.
        this.fishForm.reset();
    }


    render() {
        return(
            <form ref={(input) => this.fishForm = input} className='fish-edit' onSubmit={(e) => this.createFish(e)}>
                <input ref={(input) => this.name = input} type='text' placeholder='Fish Name' />
                <input ref={(input) => this.price = input} type='text' placeholder='Fish Price' />
                <select ref={(input) => this.status = input}>
                    <option value='available'>Fresh</option>
                    <option value='unavailable'>Sold Out!</option>
                </select>
                <textarea ref={(input) => this.desc = input} placeholder='Fish Desc' ></textarea>
                <input ref={(input) => this.image = input} type='text' placeholder="Fish Image"/>
                <button type='submit'>+ Add Item</button>
            </form>
        )
    }
}

export default AddFishForm;
