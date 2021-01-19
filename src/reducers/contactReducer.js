import { ADD_CONTACT, DELETE_CONTACT, GET_CONTACTS, GET_CONTACT, UPDATE_CONTACT } from '../actions/types'
const initialState = {
    contacts: [
        // now im adding contact using the API
    ],
    contact: {}
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            }
        case GET_CONTACT:
            return {
                ...state,
                contact: action.payload
            }
        case UPDATE_CONTACT:
            return {

            }
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        default:
            return state
    }
}
export default contactReducer;