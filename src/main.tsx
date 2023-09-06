import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'

// Document Object Model -> HTML //

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
