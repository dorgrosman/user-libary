import { Button, Stack,Input } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactsList from '../components/ContactList/ContactsList';
import UserModal from '../components/UserModal/UserModal';
import { contactList, toggleAddBtn,clearForm ,searchInput} from '../store/Action/ContactAction';

export default function HomePage() {
    const contactsList = useSelector(state => state.usersReducer.contactList)
    const addBtn = useSelector(state => state.usersReducer.addBtn)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(contactList({}))
    }, [dispatch])

    const toggleAddButton = () => {
        dispatch(toggleAddBtn(true))
        dispatch(clearForm())

    }
    const searchBox = ((event) => {
        dispatch(searchInput(event))    
        })
    return (
        <Stack alignItems="center" p={10} >
            {addBtn && <UserModal />}
            <Button onClick={toggleAddButton}>Add contact</Button>
            <Input placeholder='Search' w="lg" onChange={event =>  {searchBox(event.target.value) }}/>
            {
                contactsList ?
                    <ContactsList contacts={contactsList} />
                    : null
            }
        </Stack >
    )
}
