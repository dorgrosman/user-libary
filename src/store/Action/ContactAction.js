import axios from 'axios'
import img from '../../assets/img/profile.jpg'
export const SET_ADD_BUTTON = 'SET_ADD_BUTTON';
export const SET_USER_LIST = 'SET_USER_LIST'
export const SET_DELETE_USER = 'SET_DELETE_USER'
export const SET_ADD_USER = 'SET_ADD_USER';
export const EDIT_USER = 'EDIT_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const CLEAR_FORM = 'CLEAR_FORM';
export const SEARCH = 'SEARCH';

export const contactList = () => {
  return async (dispatch) => {
    const res = await axios.get('https://randomuser.me/api/?results=10')
    const userList = res.data.results
    // eslint-disable-next-line array-callback-return
    userList.map((content) => {
      if (content.id.value == null) {
        content.id.value = makeId()
      }
      
    })
    dispatch({ type: SET_USER_LIST, payload: userList })
  }
}

export const deleteUser = (id) => {
  return { type: SET_DELETE_USER, userId: id }
}
export const createUser = (newUser) => {
  newUser.id = {
    value: makeId()
  }
  newUser.picture = {
    medium: img
  }
  return { type: SET_ADD_USER, payload: newUser }
}

export const editUser = (id) => {
  return { type: EDIT_USER, payload: id }
}
export const updateUser = (user) => {
  return { type: UPDATE_USER, payload: user }
}
export const toggleAddBtn = (buttonStatus) => {
  return { type: SET_ADD_BUTTON, payload: buttonStatus }
}
export const clearForm = () => {
  return { type: CLEAR_FORM, payload: null }
}
export const searchInput = (value) => {
  return { type: SEARCH, payload: value }
}


function makeId(length = 5) {
  var txt = '';
  var possible = '1234567890';

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}