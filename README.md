# Catering Reservation and Ordering System

## Introduction
This is a web application for catering reservation and ordering system. Users can register, log in, view products, add to cart, and place orders. Admin can upload product details and view orders.

## Technologies Used
- HTML
- CSS
- JavaScript
- Firebase

## Features
- User Registration and Login
- View Products
- Add to Cart
- Place Orders
- User Profile Management

## Setup and Installation
1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory.
3. Set up Firebase and update `app.js` with your Firebase configuration.
4. Open `index.html` in your browser.

## Deployment
The project can be deployed on Firebase Hosting:
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize Firebase project: `firebase init`
3. Deploy: `firebase deploy`

## Logging
Logging is implemented using console logs for each action performed.

## Project Structure
- `index.html`: Main HTML file
- `styles.css`: CSS file for styling
- `app.js`: JavaScript file for functionality

## Code Example
```javascript
// Register function
function register() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("Registered successfully!");
        })
        .catch(error => {
            console.error("Error: ", error
