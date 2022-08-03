import { collection, getFirestore } from '@firebase/firestore';

import app from 'services/firebase';

const firestore = getFirestore(app);

// Constants
const COLLECTIONS = {
  USERS: 'users',
  SHOPKEEPERS: 'shopkeepers',
  SHOPS: 'shops',
  ORDERS: 'orders',
};

// Collections
const usersCollections = collection(firestore, COLLECTIONS.USERS);
const shopkeepersCollections = collection(firestore, COLLECTIONS.SHOPKEEPERS);
const shopsCollections = collection(firestore, COLLECTIONS.SHOPS);
const ordersCollections = collection(firestore, COLLECTIONS.ORDERS);

export {
  usersCollections,
  shopkeepersCollections,
  shopsCollections,
  ordersCollections,
};
