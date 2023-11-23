import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import { AuthProvider } from './context/authProvider.jsx';
import Cursor from './components/cursor/cursor.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
    <Cursor/>
   <App />
   </AuthProvider>
  </React.StrictMode>,
)
