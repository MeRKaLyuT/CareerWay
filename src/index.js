import * as React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import Store from './redux/Store';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <Provider store={Store}>
            <App />
        </Provider>
    </React.StrictMode>
);
