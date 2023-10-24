import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../custom_scrollbar.css'
import { AuthContextProvider } from './AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
      <App />
  </AuthContextProvider>
)
