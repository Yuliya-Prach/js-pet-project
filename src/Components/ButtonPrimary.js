import React from 'react';

export const ButtonPrimary = (props) => {
    return (
        <button type="button" className="btn btn-primary btn-lg" onClick={props.onClick}>{props.text}</button>
    );
};
