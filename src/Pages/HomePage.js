import React from 'react';
import {withRouter} from 'react-router-dom';
import Button from "@material-ui/core/Button";

const HomePage = (props) => {
    const handleClick = (path) => {
        props.history.push(path);
    };
    return (
        <div class="text-center">
            <h1>Home</h1>
            <Button variant="contained" color="primary" onClick={()=>handleClick('/login')}>
                Login
            </Button>
        </div>
    );
};

export default withRouter(HomePage);
