import Rebase from 're-base';
import * as firebase from 'firebase';

//we must pass an api key, the domain, and the database url. (NOTE: get this info from firebase - "add firebase to your webapp")
//we need the domain we are connecting to and database url.

const app = firebase.initializeApp({
    apiKey: "AIzaSyDZelskuKQKUYJ98NB8gNqSQji2C2H7IT8",
    authDomain: "catch-of-the-day-josh-westbury.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-josh-westbury.firebaseio.com",
});

const base = Rebase.createClass(app.database());
// const base = Rebase.createClass({
//     apiKey: "AIzaSyDZelskuKQKUYJ98NB8gNqSQji2C2H7IT8",
//     authDomain: "catch-of-the-day-josh-westbury.firebaseapp.com",
//     databaseURL: "https://catch-of-the-day-josh-westbury.firebaseio.com",
// });

export default base;
