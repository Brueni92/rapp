import { Paper } from '@material-ui/core';
import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({

    paper: {
        textAlign: 'left', padding: 10,
    },
    item: {
        position: "absolute",
        left: 270,
    },
}));
const Footer = () => {
    const classes = useStyles();
    return (
        <div>
            
            <Paper className={classes.paper}>
                <Typography variant='h5'>Dein Standort</Typography>
                <Typography variant='h10'>Huglin Index: </Typography>
                <Typography variant='h10' className={classes.item}>2000 </Typography>
                <br></br>
                <Typography variant='h10'>Niederschlagsmenge April-Sept.: </Typography>
                <Typography variant='h10' className={classes.item}>500 mm </Typography>
                <br></br>
                <Typography variant='h10'>Sonneneinstrahlung:</Typography>
                <Typography variant='h10' className={classes.item}> Hoch </Typography>
                <br></br>


            </Paper>
        </div>
    )
}

export default Footer;
