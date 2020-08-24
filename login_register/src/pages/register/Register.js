import React from 'react';
import {useState} from 'react'
import AuthService from '../../services/auth-service'
import {useHistory} from 'react-router-dom'

function Register() {

    const [state, setState] = useState({name: '', pass:''});
    const history = useHistory();

    const onRegister = () =>{
        AuthService.register(state)
            .then((res)=>{
                if(res.data === 'ok'){
                    history.push('/')
                }
                else{
                    history.push('/register')
                }
            })
    };

    return (
        <div className="conatiner">
            <h1>Register</h1>
            <div className="col-6 offset-3">
                <input type="text" placeholder="name" className="form-control" value={state.name}
                onChange={(e) => setState({...state, name: e.target.value})}
                /><br/>
                <input type="password" placeholder="password" className="form-control" value={state.pass}
                onChange={(e) => setState({...state, pass: e.target.value})}
                /><br/>
                <button onClick={onRegister} className="btn btn-primary">Registry</button>
            </div>
        </div>
    )
}

export default Register;
