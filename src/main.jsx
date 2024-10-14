// main.jsx
import * as React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'; // Asegúrate de tener tu archivo CSS si lo necesitas
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'; // Importa ChakraProvider
import { Provider } from 'react-redux';
import store from './redux/store';




// Renderiza tu aplicación envuelta en ChakraProvider y el Provider de Redux
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider> 
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
