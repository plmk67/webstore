import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import { firestoreReducer } from 'redux-firestore';

//by using this method we can create 1 State with each of these 
const rootReducer = combineReducers({
    items: items,
    itemsHasErrored: itemsHasErrored,
    itemsIsLoading: itemsIsLoading,
    firestore: firestoreReducer
});

export default rootReducer