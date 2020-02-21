import React from 'react';
import './App.css';
import Main from "./components/Main";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";

const App: React.FC = () => {
    return (
        <div className="App">
            <HashRouter>
                <Provider store={store}>
                    <Main/>
                </Provider>
            </HashRouter>
        </div>
    );
};

export default App;
