import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// StrictMode is disabled because it causes Leaflet MapContainer to initialize twice
// which results in "Map container is already initialized" error
createRoot(document.getElementById('root')!).render(<App />)
