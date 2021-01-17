import { GET_CONTACTS } from '../actions/types'
const initialState = {
    contacts: [
        {
            id: 1,
            name: 'usman',
            email: 'usman@gmail.com',
            phone: '555-555-5555'
        },
        {
            id: 2,
            name: 'ehsan',
            email: 'ehsan@gmail.com',
            phone: '444-444-4444'
        },
        {
            id: 3,
            name: 'farooq',
            email: 'farooq@gmail.com',
            phone: '333-333-333'
        }
    ]
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACTS:
            return {
                ...state
            }
        default:
            return state
    }
}
export default contactReducer;