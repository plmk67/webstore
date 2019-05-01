import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { reduxFirestore, getFirestore} from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from '../config/fbConfig';


export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        //for Firestore Setup with Redux
        compose(
            applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
            reduxFirestore(fbConfig),
            reactReduxFirebase(fbConfig)
        )
    );
}