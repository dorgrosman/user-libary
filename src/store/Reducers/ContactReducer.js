import { SET_USER_LIST, SET_DELETE_USER, SET_ADD_USER, SET_ADD_BUTTON, EDIT_USER, UPDATE_USER, CLEAR_FORM, SEARCH } from '../Action/ContactAction'

const initialState = {
    contactList: [],
    addBtn: false,
    selectedUser: null,
    searchInput: ""
};

const ContactReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_LIST:
            return { ...state, contactList: action.payload }
        case SET_DELETE_USER:
            const newList = state.contactList.filter(contact => contact.id.value !== action.userId)
            return { ...state, contactList: newList }
        case SET_ADD_USER:
            const newUser = action.payload;
            state.contactList.unshift(newUser)
            return { ...state }
        case SET_ADD_BUTTON:
            const addBtnStatus = action.payload;
            return { ...state, addBtn: addBtnStatus }
        case EDIT_USER:
            const userID = action.payload;
            const user = state.contactList.find(contact => contact.id.value === userID)
            return { ...state, selectedUser: user }
        case CLEAR_FORM:
            return { ...state, selectedUser: null }
        case SEARCH:
            const inputValue = action.payload
            return { ...state, searchInput: inputValue }
        case UPDATE_USER:
            const updatedUser = action.payload;
            const selectedUser = state.contactList.find(contact => contact.id.value === updatedUser.id)
            const index = state.contactList.findIndex(user => user === selectedUser)
            const modifiedUser = {
                ...selectedUser,
                name: {
                    first: updatedUser.name.first,
                    last: updatedUser.name.last,
                },
                location: {
                    country: updatedUser.location.country,
                    city: updatedUser.location.city,
                    street: {
                        name: updatedUser.location.street.name,
                    },
                },
                email: updatedUser.email
            }
            state.contactList.splice(index, 1, modifiedUser)
            return { ...state }
        default:
            return state;
    }
}


export default ContactReducer