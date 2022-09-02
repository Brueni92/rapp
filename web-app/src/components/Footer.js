import { Paper } from '@material-ui/core';
import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

    paper: {
        textAlign: 'center', height: 60, paddingTop: 20,
    },
}));
const Footer = () => {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.paper}>
                <CopyrightIcon style={{ fontSize: 'small' }} /> Open Framing Hackdays 2022


            </Paper>
        </div>
    )
}

export default Footer;
