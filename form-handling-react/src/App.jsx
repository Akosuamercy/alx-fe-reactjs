import { useState } from 'react'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/formikForm'

function App() {
  

  return (
    <>

     
      <h1>Hello World</h1>
      <div className="card">
        <RegistrationForm />
        <FormikForm />

      </div>
      
    </>
  )
}

export default App
