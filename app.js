// Firebase configuration
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Register function
function register() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("Registered successfully!");
        })
        .catch(error => {
            console.error("Error: ", error.message);
        });
}

// Login function
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("Logged in successfully!");
            document.getElementById('user-container').style.display = 'none';
            document.getElementById('content').style.display = 'block';
        })
        .catch(error => {
            console.error("Error: ", error.message);
        });
}

// Fetch products
function fetchProducts() {
    db.collection('products').get().then(querySnapshot => {
        const productList = document.getElementById('product-list');
        querySnapshot.forEach(doc => {
            const product = doc.data();
            const productElement = document.createElement('div');
            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>${product.price}</p>
                <button onclick="addToCart('${doc.id}')">Add to Cart</button>
            `;
            productList.appendChild(productElement);
        });
    });
}

// Add to cart
function addToCart(productId) {
    const user = auth.currentUser;
    if (user) {
        db.collection('carts').add({
            userId: user.uid,
            productId: productId,
            quantity: 1
        }).then(() => {
            alert("Added to cart!");
        }).catch(error => {
            console.error("Error: ", error.message);
        });
    } else {
        alert("Please login first.");
    }
}

// Fetch cart items
function fetchCart() {
    const user = auth.currentUser;
    if (user) {
        db.collection('carts').where('userId', '==', user.uid).get().then(querySnapshot => {
            const cart = document.getElementById('cart');
            querySnapshot.forEach(doc => {
                const cartItem = doc.data();
                const cartItemElement = document.createElement('div');
                cartItemElement.innerHTML = `
                    <h4>Product ID: ${cartItem.productId}</h4>
                    <p>Quantity: ${cartItem.quantity}</p>
                `;
                cart.appendChild(cartItemElement);
            });
        });
    }
}

// Place order
function placeOrder() {
    const user = auth.currentUser;
    if (user) {
        db.collection('orders').add({
            userId: user.uid,
            products: [],
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            alert("Order placed!");
        }).catch(error => {
            console.error("Error: ", error.message);
        });
    } else {
        alert("Please login first.");
    }
}

// Load data on page load
window.onload = function() {
    auth.onAuthStateChanged(user => {
        if (user) {
            fetchProducts();
            fetchCart();
        }
    });
};
