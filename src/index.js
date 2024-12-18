import * as React from 'react';
import {createRoot} from 'react-dom/client';
<<<<<<< HEAD
import App from './App';
import { Provider } from 'react-redux';
import Store from './redux/Store';
=======
import App from './components/App';
import { Provider } from 'react-redux';
import Store from './components/Store';
>>>>>>> b3df91d65503bfdd141adf48e0bf0d830778c72a


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <Provider store={Store}>
            <App />
        </Provider>
    </React.StrictMode>
<<<<<<< HEAD
)
=======
)


>>>>>>> b3df91d65503bfdd141adf48e0bf0d830778c72a
