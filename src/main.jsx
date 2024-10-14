import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NavBar from './components/NavBar'

createRoot(document.getElementById('root')).render(
    <>
        <NavBar/>
        <App />
    </>
)
