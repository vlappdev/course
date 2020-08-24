import React, { useEffect }from 'react';
import {useSelector, useDispatch} from 'react-redux'
import AuthService from "../../services/auth-service";
import { useHistory } from 'react-router-dom'
import {removeUser, setUser} from "../login/store/actions";

function Home() {
    const dispatch = useDispatch();
    const userStore = useSelector(store => store.userStore);
    const history = useHistory();

    useEffect(()=>{
        if(AuthService.getUserData() === null){
            history.push('/')
        }
        if(userStore){
            dispatch(setUser(AuthService.getUserData()))
        }
    }, []);

    const onLogout = () => {
        AuthService.logout(history);
        dispatch(removeUser())
    };

    return (
        <div className="container">
            <h1>Home Page</h1>
            <h2>Hello {userStore.name}</h2>
            <button className="btn btn-warning" onClick={onLogout}>Logout</button>
        </div>
    );
}

export default Home;