import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import Store from './Components/Redux/reduxStore';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
      <Provider store={Store}>
      <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
  </Provider>
  </StrictMode>,
)
