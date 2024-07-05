const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const db = admin.firestore();

router.get('/', async (req, res) => {
  const productsSnapshot = await db.collection('products').get();
  const products = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.json(products);
});

router.post('/', async (req, res) => {
  const product = req.body;
  await db.collection('products').add(product);
  res.status(201).json({ message: 'Product added successfully' });
});

module.exports = router;
