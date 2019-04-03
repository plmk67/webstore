import axios from "axios";
import { DH_UNABLE_TO_CHECK_GENERATOR } from "constants";

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

// 2. using Axios, we grab the link and push data to Reducer.js

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

    axios.get(url)
            .then((response) => {
            
            dispatch(itemsIsLoading(false));

            let fetchedProduct = [];
    
            for (let key in response.data) {
                fetchedProduct.push({
                ...response.data[key],
                id: key
                });
            }
        //console.log shows that fetchedProduct is good
            return fetchedProduct
        })
        .then((items) => dispatch(itemsFetchDataSuccess(items)))
        .catch(() => dispatch(itemsHasErrored(true)))
      } 
}

//
export const createProject =  (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Vincent',
            authorLastName: "Meowmeow",
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project });
        }).catch((error) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', error});
        })
    }
};