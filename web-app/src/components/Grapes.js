import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core/';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 200,
  },
  content: {
    height: 150,
  },
  nav: {
    textDecoration: 'None',
  },
  title: {
    marginTop: 10,
  },
}));

const Grapes = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant='h4'>
        Geeignete Rebsorten
      </Typography>
      <Grid
        container
        spacing={2}
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
      >
        {props.grapes.map((grape) => {
          const {
            id,
            name,
            desc,
            wuchs,
            reifezeit,
            lageansprueche,
            color,
            wine_desc,
            pilzresistent,
            img_url,
          } = grape;

          return (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <NavLink className={classes.nav} to={`/${id}`}>
                <Card>
                  <CardActionArea>
                    <CardMedia className={classes.media} image={img_url} />
                    <CardContent className={classes.content}>
                      <Typography
                        gutterBottom
                        variant='h5'
                        component='h2'
                        className={classes.title}
                      >
                        {name}
                      </Typography>
                      <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                      >
                        Farbe: {color}
                      </Typography>
                      <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                      >
                        Wuchs: {wuchs}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions></CardActions>
                </Card>
              </NavLink>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Grapes;
