import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import AppRoutes from './routes';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  return (
    <>
       <BrowserRouter>
            <>
              <Provider store={store}>
              <Header />
                <AppRoutes />
                <Footer />
              </Provider>
            </>
        </BrowserRouter>
    </>
  )
}

export default App
