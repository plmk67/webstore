import {CREATE_EVENT} from './productsConstants'

export const createEvent = (event) => {

    return async dispatch => {
        try {
            dispatch({
                type: CREATE_EVENT,
                payload: {
                    event
                }   
            });
            toastr.success('Success!', 'Event has been created')
        } catch (error) {
            toastr.error('Oops', 'Something went wrong')
        }
    }
}