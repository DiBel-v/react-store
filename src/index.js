import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ClothingstoreServiceProvider } from './components/clothingstore-service-context';
import ClothingstoreService from './services/clothingstore-service';
import './media/core.sass';

import store from './store';

const clothingstoreService = new ClothingstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ClothingstoreServiceProvider value={clothingstoreService}>
            <Router>
                <App />
            </Router>
        </ClothingstoreServiceProvider>
    </Provider>,
    document.getElementById("root")
);
