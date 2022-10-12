import './App.css'
import React from 'react'
import logo from './logo.svg'
import styled from 'styled-components'

export function App() {
  return (
    <Div_App>
      <Header_App>
        <Img_logo src={logo} alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <A_App href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </A_App>
      </Header_App>
    </Div_App>
  )
}

const Div_App = styled.div`
  text-align: center;
`

const Header_App = styled.header`
  background-color: #282c34;
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
