import { useState } from 'react'
import Datas from './assets/images/Datas';
import HeaderWeb from './assets/components/HeaderWeb';
import Card from './assets/components/Card';
import './App.css'

function App() {

  const data = Datas[0];

  return (
    <>
      <HeaderWeb/>
      
      <section className='body'>
        <Card data={data} />
        
      </section>

    </>
  )
}

export default App
