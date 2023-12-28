import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import { AuthProvider } from './context/authProvider.jsx';
// import StarField from './components/cursor/NewCursor.jsx';
import './App.css'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <App />
   </AuthProvider>
  </React.StrictMode>,
)
