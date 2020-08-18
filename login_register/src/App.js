import React from 'react';
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <div>
                <Register/>
                <Login/>
                <Route exact path="/" component={Login}/>
                <Route exact path="/register" component={Register}/>
            </div>
        </BrowserRouter>
    );
}

export default App;