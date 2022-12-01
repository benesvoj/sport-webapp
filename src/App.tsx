import './App.css'
import {
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Stack,
} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { urls } from './utils/urls'
import React, { useState } from 'react'
import logo from './logo.svg'
import styled from 'styled-components'

export const App = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  let navigate = useNavigate()

  return (
    <Div_App>
      <Header_App>
        <Stack spacing={3}>
          <Img_logo src={logo} alt='logo' />
          <FormControl onSubmit={() => navigate(urls.apps.dashboard.link)}>
            <Input isRequired variant='flushed' size='sm' placeholder='Enter login' />
            <InputGroup size='md'>
              <Input
                variant='flushed'
                size='sm'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
              />
              <InputRightElement width='4.5rem'>
                <Button colorScheme='blackAlpha' h='1.75rem' size='sm' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Flex minWidth='max-content' alignItems='center' gap='2'>
              <Spacer />
              <ButtonGroup gap='2'>
                <Button colorScheme='blue'>Cancel</Button>
                <Link to={urls.apps.dashboard.link}>
                  <Button colorScheme='blue' type='submit'>
                    Login
                  </Button>
                </Link>
              </ButtonGroup>
            </Flex>
          </FormControl>
        </Stack>
      </Header_App>
    </Div_App>
  )
}

const Div_App = styled.div`
  text-align: center;
`

const Header_App = styled.header`
  background-color: ${props => props.theme.background.default};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
const Img_logo = styled.img`
  height: 40vmin;
  pointer-events: none;
`
const A_App = styled.a`
  color: #61dafb;
`
