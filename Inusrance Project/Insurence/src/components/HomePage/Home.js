import React from 'react'
import './Home.css'
import ListOfPolicies from '../ListOfPolicies/ListOfPolicies'
import LoginPage from './LoginPage'

function Home() {
  return (
    <>
    <div className='background'>
    <div className='top'>
      
      <h2>Ramana Insurance Policies</h2>
    </div>
    <div >
      <ListOfPolicies/>
      <LoginPage/>
    </div>
    </div>
    </>
  )
}

export default Home
