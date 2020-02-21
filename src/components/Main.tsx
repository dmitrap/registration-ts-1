import React from 'react';
import './../App.css';
import Login from "./Login";
import {Route} from 'react-router-dom';
import Registration from "./Registration";
import RecoveryPassword from './RecoveryPassword';
import Profile from './Profile';
import Header from "./Header";

const Main: React.FC = () => {
    return (
        <div className="App">

            <Header/>

            <div className="content">
                <Route path={'/login'} render={() => <Login/>}/>
                <Route path={'/registration'} render={() =><Registration/>}/>
                <Route path={'/recovery'} render={() => <RecoveryPassword/>}/>
                <Route path={'/profile'} render={() => <Profile/>}/>
            </div>

        </div>
    );
};

export default Main;
