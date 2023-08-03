import { Button, Layout } from 'antd';
import './App.css'
import HeaderComp from './components/Header';
import FooterComp from './components/Footer';
import HomePage from './pages/Home';

function App() {

  return (
    <Layout className='main_container'>
      
      <Layout className='layout'>
      <HeaderComp />
        <HomePage />
        <FooterComp />
      </Layout>



    </Layout>
  )
}

export default App
