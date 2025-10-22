import React from 'react'
import "./styles/style.scss"

const Comp1 = (props) => {

 return (
        <div className='text-center'> 
            <h1>WELCOME TO MY PAGE</h1>
            <h2 className='title text-danger'>your{props.name} !</h2>
        </div>
    )
}
export default Comp1