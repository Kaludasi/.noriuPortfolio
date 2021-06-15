import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style.css";
import "./animations";
import "./i18n/i18n";
import "@fortawesome/fontawesome-free/css/fontawesome.css";

export default function tick() {
    ReactDOM.render(
        <React.StrictMode>
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
            />
            <App/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

setInterval(tick, 1000)