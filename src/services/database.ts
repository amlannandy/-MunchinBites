import { getFirestore, collection } from '@firebase/firestore';

import app from 'services/index';

const firestore = getFirestore(app);

// Constants
const COLLECTIONS = {
  USERS: 'users',
  SHOPS: 'shops',
  ORDERS: 'orders',
};

// Collections
const usersCollections = collection(firestore, COLLECTIONS.USERS);
const shopsCollections = collection(firestore, COLLECTIONS.SHOPS);
const ordersCollections = collection(firestore, COLLECTIONS.ORDERS);

export { usersCollections, shopsCollections, ordersCollections };
