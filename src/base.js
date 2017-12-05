import Rebase from 're-base';


// const app = firebase.initializeApp({
//     apiKey: "AIzaSyDZelskuKQKUYJ98NB8gNqSQji2C2H7IT8",
//     authDomain: "catch-of-the-day-josh-westbury.firebaseapp.com",
//     databaseURL: "https://catch-of-the-day-josh-westbury.firebaseio.com",
// });

const base = Rebase.createClass({
    apiKey: "AIzaSyDZelskuKQKUYJ98NB8gNqSQji2C2H7IT8",
    authDomain: "catch-of-the-day-josh-westbury.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-josh-westbury.firebaseio.com",
});


//const base = Rebase.createClass(app.database());

export default base;
