import React from 'react';
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar"
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Route exact path="/" component={Login}/>
                <Route path="/register" component={Register}/>
            </div>
        </BrowserRouter>
    );
}

export default App;