const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const db = admin.firestore();

router.get('/', async (req, res) => {
  const ordersSnapshot = await db.collection('orders').get();
  const orders = ordersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.json(orders);
});

router.post('/', async (req, res) => {
  const order = req.body;
  await db.collection('orders').add(order);
  res.status(201).json({ message: 'Order placed successfully' });
});

module.exports = router;
