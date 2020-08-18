import React from 'react';

function Login() {
    return (
        <div className="conatiner">
            <h1>Login</h1>
            <div className="col-6 offset-3">
                <input type="text" placeholder="name" className="form-control"/><br/>
                <input type="password" placeholder="password" className="form-control"/><br/>
                <button className="btn btn-info">Registry</button>
            </div>
        </div>
    );
}

export default Login;