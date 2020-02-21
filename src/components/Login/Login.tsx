import React from 'react';
import '../../App.css';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import s from './Login.module.css'
import {NavLink} from "react-router-dom";

interface IProps {
    title: string
}

class Login extends React.Component<IProps> {
    render() {
        return (
            <div className={s.login}>

                <h2>{this.props.title}</h2>

                <form className={s.loginForm}>
                    <input className={s.loginInput} type="text"/>
                    <input className={s.loginInput} type="text"/>
                    <div className={s.remember}>
                        <label>
                            <input type="checkbox"/>Remember me
                        </label>
                        <button>Login</button>
                    </div>
                </form>

                <div className={s.links}>
                    <NavLink activeClassName="activeLink" to={'/recovery'}>Forgot password?</NavLink>
                    <NavLink activeClassName="activeLink" to={'/registration'}>Registration</NavLink>
                </div>
                
            </div>
        );
    }
}

const mstp = (state: AppStateType) => ({
    title: state.login.title
});

const ConnectedLogin = connect(mstp, {})(Login);
export default ConnectedLogin;
