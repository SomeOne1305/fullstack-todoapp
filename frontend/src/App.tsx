import React from 'react'
import { Form, Header,Title } from './components'
import { Container } from './components/partials'
import {Register} from './components/pages/'
const App = ():JSX.Element => {
  
  return(
    <div className="w-100 min-vh-100 p-0">
      <Header/>
      <Container>
        <Form/>
        <Title/>
        <Register/>
        <div className="w-100 py-2 mt-3">
          
        </div>
      </Container>
      
    </div>
  )
}

export default App