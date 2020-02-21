import React from 'react';
import './../App.css';
import {connect} from "react-redux";
import {AppStateType} from "../redux/store";

interface IProps {
    title: string
}

class Login extends React.Component<IProps> {
    render() {
        return (
            <div>
                {this.props.title}
            </div>
        );
    }
}

const mstp = (state: AppStateType) => ({
    title: state.login.title
});

const ConnectedLogin = connect(mstp, {})(Login);
export default ConnectedLogin;
