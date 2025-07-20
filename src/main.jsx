import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MediaCacheProvider } from './contexts/MediaCacheContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MediaCacheProvider>
    <App />
    </MediaCacheProvider>
  </StrictMode>,
)
