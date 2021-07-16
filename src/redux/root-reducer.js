import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

//what we will get here is the actual local storage object on our window browser
//i am saying here i want to use local storage as my default storage
//alternatively sessionstorage can be imported from this another lib in redux-persist
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

//json object
//config for redux-persist to use
const persistConfig = {
  key: 'root',  //at what point of our Reducer object do we want to start storing everything
  storage,      //from import
  whitelist: ['cart'] // this property is an array containing the string names of the reducer that we want to store
  //the only reducer we want to persist is the cart
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

//modified route reducer ,with persistance capabilities
export default persistReducer(persistConfig, rootReducer);