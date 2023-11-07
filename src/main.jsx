import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../custom_scrollbar.css'
import { AuthContextProvider } from './AuthContext.jsx'
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <Provider store={store}>
      <App />
      </Provider>
  </AuthContextProvider>
)
