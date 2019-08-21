import React from 'react';
import {withRouter} from 'react-router-dom';
import {ButtonPrimary} from "../Components/ButtonPrimary";

const HomePage = (props) => {
    const handleClick = (path) => {
        props.history.push(path);
    };
    return (
        <div class="text-center">
            <h1>Home</h1>
            <ButtonPrimary onClick={()=> handleClick('/login')} text="Login" />
        </div>
    );
};

export default withRouter(HomePage);
