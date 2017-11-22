import React from 'react';

// when you have a simple compnent that simply renders HTML, you can use a "Stateless Functional Component"
// rather than a full react component. Stateless functional components look like this:

//note that the 'this' was taken out as we are no longer using a class. So now we access props as 'props.tagline'.



const Header = (props) => {
    return (
        <header className="top">
            <h1>
                Catch
                <span className="ofThe">
                    <span className="of">of</span>
                    <span className="the">the</span>
                </span>
                Day
            </h1>
            <h3 className="tagline"><span>{props.tagline}</span></h3>
        </header>
    )
}




export default Header;
