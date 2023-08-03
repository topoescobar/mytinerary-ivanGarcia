import { useState } from 'react'
import { Button, Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import './App.css'
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout className='main_container'>
        <Header>
          <h1>Vite + React + AntD</h1>
        </Header>

        <Home> </Home>

        <Footer> <p>footer</p> </Footer>

      </Layout>



    </>
  )
}

export default App
