/* eslint-disable array-callback-return */
import { Stack } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import ContactPreview from '../ContactPreview/ContactPreview';

export default function ContactsList(props) {
    const contacts = props.contacts
    const searchTerm = useSelector(state => state.usersReducer.searchInput)

    return (
        <>
            {contacts ? (
                <Stack spacing={6}>
                    {contacts.filter(contact => {
                        if (searchTerm === "") {
                            return contact
                        } else if (
                            contact.name.first.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                            contact.name.last.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                            contact.id.value.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                            contact.email.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                                return contact
                        }}).map(contact =>
                            <ContactPreview key={contact.id.value} contact={contact} />
                        )}
                </Stack>
            ) : null}
        </>
    )
}
