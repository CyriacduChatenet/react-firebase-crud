import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/pages/home/App'
import './app/styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
