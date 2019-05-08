import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducers'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { reduxFirestore, getFirestore} from 'redux-firestore';
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';


// export default function configureStore(initialState) {
//     return createStore(
//         rootReducer, 
//         initialState,
//     );
// }

export default function configureStore(preloadedState){
    const middlewares = [thunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const storeEnhancers = [middlewareEnhancer];

    //Devtools extension allows Chrome to inspect
    const composedEnhancer = composeWithDevTools(...storeEnhancers);

    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancer
    );

    //Hot module reducer so we don't need to refresh to see updates to State in REdux
    if(process.env.NODE_ENV !== 'production') {
        if(module.hot){
            module.hot.accept('../reducers/rootReducers', () => {
            const newRootReducer = require('../reducers/rootReducers').default;
            store.replaceReducer(newRootReducer)
            })
        }
    }

    return store;
}