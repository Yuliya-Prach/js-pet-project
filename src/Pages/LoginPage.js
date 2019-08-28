import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import AuthorizationService from '../Services/AuthorizationService';

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    }
}));

export const LoginPage = (props) => {
    const classes = useStyles();
    const [user, setUser] = useState(null);
    const handleSubmit = () => {
        AuthorizationService.authorize(user);
        props.history.push('/');
    };
    const handleInputChange = e => {
        const {value} = e.target
        setUser(value)
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="standard-with-placeholder"
                    label="User"
                    placeholder="User"
                    className={classes.textField}
                    margin="normal"
                    value={user}
                    onChange={handleInputChange}
                />
                <Button variant="outlined" color="primary" className={classes.button} type="submit">
                    Login
                </Button>
            </form>
        </div>
    );
};

