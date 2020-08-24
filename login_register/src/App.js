import React from 'react';
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar"
import {BrowserRouter, Route} from 'react-router-dom'

import store from './store'
import {Provider} from 'react-redux'

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Navbar/>
                    <Route exact path="/" component={Login}/>
                    <Route path="/register" component={Register}/>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;