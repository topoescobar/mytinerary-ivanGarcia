import 'antd/dist/reset.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ConfigProvider, theme } from 'antd'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider theme={{
      algorithm: theme.darkAlgorithm,
      token: {
        colorPrimary: '#994aff',
        wireframe: false
      },
    }}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)
