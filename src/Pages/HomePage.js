import React from 'react';
import {withRouter} from 'react-router-dom';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AuthorizationService from '../Services/AuthorizationService';

const useStyles = makeStyles({
    avatar: {
        margin: 10,
    }
});

const HomePage = (props) => {
    const classes = useStyles();
    const handleClick = () => {
        let path = '/login';
        if (AuthorizationService.isAuthorized() ) {
            AuthorizationService.logout();
            path = '/';
        }
        props.history.push(path);
    };
    let buttonText = AuthorizationService.isAuthorized()? 'Logout' : 'Login';

    return (
        <div class="text-center">
            <h1>Home</h1>
            {
                AuthorizationService.isAuthorized() &&
                <Grid container justify="center" alignItems="center">
                    <Avatar className={classes.purpleAvatar}>
                        <AccountCircleIcon/>
                    </Avatar>
                </Grid>
            }
            <Button variant="contained" color="primary" onClick={handleClick}>
                {buttonText}
            </Button>
        </div>
    );
};

export default withRouter(HomePage);
