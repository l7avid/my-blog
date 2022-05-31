import React, { useContext } from 'react'
import { Store } from '../../state/StoreProvider'
import '../../App.css'

const Knowledges = () => {
  const {state} = useContext(Store)
  
  return (
    <div className='main_content'>
      <h1>Python</h1>
      <h1>Java</h1>
      <h1>JavaScript</h1>
    </div>
  )
}

export default Knowledges
