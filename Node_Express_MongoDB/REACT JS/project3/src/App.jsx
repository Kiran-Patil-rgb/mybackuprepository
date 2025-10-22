import React from 'react'
import "./App.css"



import Comp1 from './components/Comp1'

// bootstarp 
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

const App = () => {
  return (
    <>
      <h1 className='text-primary fw-bolder text-center'>THIS IS PROJECT 3</h1>
     
        <div className="d-flex align-items-center justify-content-center">
      <Comp1 name="  welcome" />
     </div>
    </>
  );
}

export default App