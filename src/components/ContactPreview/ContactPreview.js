import { Button, CloseButton, Divider, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser, editUser } from '../../store/Action/ContactAction'
import { toggleAddBtn } from './../../store/Action/ContactAction'

export default function ContactPreview(props) {
    const contact = props.contact
    const dispatch = useDispatch()

    const selectedDeleteUser = () => {
        dispatch(deleteUser(contact.id.value))
    }
    const selectedEditUser = () => {
        dispatch(editUser(contact.id.value))
        dispatch(toggleAddBtn(true))
    }

    return (
        <Stack w="lg" p={4} rounded="xl" boxShadow="xl">
            <Flex alignItems="center" gap={2}>
                <Image src={contact.picture.medium} rounded="full" boxSize="35px" />
                <Stack spacing={0} textAlign="left">
                    <Text fontSize="lg">
                        {contact.name.first}
                    </Text>
                    <Text fontSize="md" color="gray.500">
                        {contact.name.last}
                    </Text>
                </Stack>
                <Button ml="auto" colorScheme='teal' size='sm' onClick={() => selectedEditUser()}>
                    Edit
                </Button>
                <CloseButton onClick={() => selectedDeleteUser()} />
            </Flex >
            <Divider />
            <Text fontSize="md" color="gray.500">
                {contact.location.country + ", " + contact.location.city + ", " + contact.location.street.name}
            </Text>
            <Text fontSize="md" color="gray.500">
                {contact.email}
            </Text>
            <Text fontSize="md" color="gray.500">
                {contact.id.value}
            </Text>
        </Stack >
    )
}