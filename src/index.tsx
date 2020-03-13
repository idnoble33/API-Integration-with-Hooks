import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import { StoreProvider } from './Store';

ReactDOM.render(
<StoreProvider>
<App />
</StoreProvider>,
document.getElementById('root'));


