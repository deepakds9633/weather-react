import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import ex from './Thelivu'
//import './ex.css'

import WeatherApp from './weatherApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherApp/>
  </StrictMode>,
)
