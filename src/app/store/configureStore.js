import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducers'
// import { reduxFirestore, getFirestore} from 'redux-firestore';
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';


export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState
        
    );
}