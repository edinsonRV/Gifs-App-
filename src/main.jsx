import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GiffExpertApp from './GiffExpertApp.jsx'
import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GiffExpertApp />
  </StrictMode>,
)
