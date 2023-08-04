import { Button, Layout } from 'antd';
import './App.css'
import HeaderComp from './components/Header';
import FooterComp from './components/Footer';
import HomePage from './pages/Home';

function App() {

  return (
    <Layout theme="dark" id='main_container'>
 
        <HeaderComp />
        <HomePage />
        <FooterComp />
   
    </Layout>
  )
}

export default App
