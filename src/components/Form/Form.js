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
          colorScheme='blue'
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

    // <form className='flex flex-col items-center justify-center font-poppins mt-16 mb-72 mv:w-full md:w-400'>
    //   <div className='flex mv:flex-col sm:flex-row justify-between mv:w-full md:w-400 space-x-4'>
    //     <span className='w-full'>
    //       <label className='font-poppins font-medium'>First Name</label>
    //       <input
    //         className='form-input h-8 font-poppins'
    //         placeholder='Enter your first name'
    //       />
    //     </span>
    //     <span className='w-full'>
    //       <label className='font-poppins font-medium'>Last Name</label>
    //       <input
    //         className='form-input h-8 font-poppins'
    //         placeholder='Enter your last name'
    //       />
    //     </span>
    //   </div>
    //   <div className='flex mv:flex-col sm:flex-row justify-between mv:w-full md:w-400 space-x-4'>
    //     <span className='w-full'>
    //       <label className='font-poppins font-medium'>Email Address</label>
    //       <input
    //         className='form-input h-8 font-poppins'
    //         placeholder='Enter your email'
    //       />
    //     </span>
    //     <span className='w-full'>
    //       <label className='font-poppins font-medium'>Budget</label>
    //       <input
    //         className='form-input h-8 font-poppins'
    //         name='currency-input'
    //         onKeyDown={keyPressHandler}
    //         placeholder={currentcyFormat.format('')}
    //         value={value !== '' ? currentcyFormat.format(value) : ''}
    //       />
    //     </span>
    //   </div>
    //   <div className='mv:w-full md:w-400'>
    //     <label className='font-poppins font-medium'>Message</label>
    //     <textarea
    //       rows='8'
    //       className='mv:w-full md:w-400 form-input'
    //       placeholder='Your message here...'
    //     ></textarea>
    //   </div>
    //   <button className='mt-12 shadow-button px-12 rounded font-poppins font-normal text-center py-4 bg-theme text-white hover:scale-102 transition-all ease-in duration-50'>
    //     Submit
    //   </button>
    // </form>
  )
}
