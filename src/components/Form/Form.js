import { FormControl, FormLabel, Input, Textarea, FormErrorMessage, ChakraProvider, Button, Container, Text, useToast } from '@chakra-ui/react'
import { sendContactForm } from 'lib/api'
import React, { useState } from 'react'

const initValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}
const initState = { values: initValues }

export default function Form() {
  const toast = useToast()
  const [state, setState] = useState(initState)
  const [touched, setTouched] = useState({})

  const { values, error } = state

  const onBlur = ({target}) => setTouched((prev) => ({ 
    ...prev,
    [target.name]:true,
  }))

  const handleChange = ({target}) => setState((prev) => ({
    ...prev,
    values: {
      ...prev.values,
      [target.name]: target.value
    }
  }))

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading:true
    }));

    try {
      await sendContactForm(values)
      setTouched({})
      setState(initState)
      toast({
        title: 'Message sent.',
        status: 'success',
        duration: 2000,
        position: 'top',
      })
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message
      }))
    }
    
  }

  return (
    <ChakraProvider>
      <Container className='flex flex-col items-center'>
        {error && (
          <Text color='red.300' my={4} fontSize='xl'>
            {error}
          </Text>
        )}
        <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
          <FormLabel>Name</FormLabel>
          <Input
            type='text'
            name='name'
            errorBorderColor='red.300'
            value={values.name}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={touched.email && !values.email}
          mb={5}
        >
          <FormLabel>Email</FormLabel>
          <Input
            type='email'
            name='email'
            errorBorderColor='red.300'
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={touched.subject && !values.subject}
          mb={5}
        >
          <FormLabel>Subject</FormLabel>
          <Input
            type='text'
            name='subject'
            errorBorderColor='red.300'
            value={values.subject}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={touched.message && !values.message}
          mb={5}
        >
          <FormLabel>Message</FormLabel>
          <Textarea
            type='text'
            name='message'
            errorBorderColor='red.300'
            rows={4}
            value={values.message}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <Button
          variant='outline'
          colorScheme='black'
          isLoading={state.isLoading}
          isDisabled={
            !values.name || !values.email || !values.subject || !values.message
          }
          onClick={onSubmit}
        >
          Submit
        </Button>
      </Container>
    </ChakraProvider>
  )
}
