import {
    Button, HStack, Input, Modal, ModalBody,
    ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, toggleAddBtn, updateUser } from '../../store/Action/ContactAction';

export default function NewUser() {
    const addBtn = useSelector(state => state.usersReducer.addBtn)
    const selectedUser = useSelector(state => state.usersReducer.selectedUser)
    const [first, setFirst] = useState(selectedUser ? selectedUser.name.first : '');
    const [last, setLast] = useState(selectedUser ? selectedUser.name.last : '');
    const [country, setCountry] = useState(selectedUser ? selectedUser.location.country : '');
    const [city, setCity] = useState(selectedUser ? selectedUser.location.city : '');
    const [street, setStreet] = useState(selectedUser ? selectedUser.location.street.name : '');
    const [email, setEmail] = useState(selectedUser ? selectedUser.email : '');
    const dispatch = useDispatch();

    const user = {
        id: selectedUser ? selectedUser.id.value : "",
        name: {
            first,
            last
        },
        location: {
            country,
            city,
            street: {
                name: street
            },
        },
        email,
    }
    const toggleAddButton = () => {
        dispatch(toggleAddBtn(false))

    }
    const submitHandler = (event) => {
        event.preventDefault()
        if (selectedUser) {
            dispatch(updateUser(user))
        } else {
            dispatch(createUser(user))
        }
        dispatch(toggleAddBtn(false))
    }
    return (
        <Modal isOpen={addBtn}
            onClose={toggleAddButton} >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add user</ModalHeader>
                <ModalCloseButton />
                <Stack as="form" onSubmit={submitHandler}>
                    <ModalBody>
                        <Stack>
                            <Input variant="outline" placeholder="First Name" id="first" value={first} onChange={(event) => setFirst(event.target.value)} />
                            <Input variant="outline" placeholder="Last Name" id="last" value={last} onChange={(event) => setLast(event.target.value)} />
                            <Input variant="outline" placeholder="Country" id="country" value={country} onChange={(event) => setCountry(event.target.value)} />
                            <Input variant="outline" placeholder="City" id="city" value={city} onChange={(event) => setCity(event.target.value)} />
                            <Input variant="outline" placeholder="street" id="street" value={street} onChange={(event) => setStreet(event.target.value)} />
                            <Input variant="outline" placeholder="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <HStack>
                            <Button type="submit" >Save</Button>
                            <Button onClick={toggleAddButton} >cancel</Button>
                        </HStack>
                    </ModalFooter>
                </Stack>
            </ModalContent>
        </Modal >
    )
}
