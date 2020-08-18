import React from 'react';

function Register() {
    return (
        <div className="conatiner">
            <h1>Register</h1>
            <div className="col-6 offset-3">
                <input type="text" placeholder="name" className="form-control"/><br/>
                <input type="password" placeholder="password" className="form-control"/><br/>
                <button className="btn btn-primary">Registry</button>
            </div>
        </div>
    )
}

export default Register;
