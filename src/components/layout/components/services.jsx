import React from 'react';
import {useHistory} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles({
  container: {
    textAlign: "center",
    paddingTop: "20px",
    paddingBottom: "30px",
    marginLeft:"20px",
    marginRight:"20px"
  },
  root: {
    width: "100%",
    marginRight: "30px",
    border: "1px solid #E336FF"
  },
  title: {
    fontFamily: "initial",
    marginBottom: "30px"
  }
});

export default function MediaCard(props) {
  const classes = useStyles();
  const history = useHistory();
  const {data} = props;

  return (
    <div className = "container-fluid" className = {classes.container} id = "buy-space">
      <h1 className = {classes.title}>{data.title}</h1>
      <div className = "row">
        <div className = "col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/img/team/01.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {data.freeTitle}<br /><br />{data.freePrice}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style = {{textAlign: "left", display: "inline-block"}}>
                  <div>
                    <CheckIcon color = "secondary" /><i style = {{verticalAlign: "super"}}> {data.free1}</i>
                  </div>
                  <div>
                    <CheckIcon color = "secondary" /><i style = {{verticalAlign: "super"}}> {data.free2}</i>
                  </div>
                  <div>
                    <CheckIcon color = "secondary" /><i style = {{verticalAlign: "super"}}> {data.free3}</i>
                  </div>
                  <div>
                    <CheckIcon color = "secondary" /><i style = {{verticalAlign: "super"}}> {data.free4}</i>
                  </div>
                  <div>
                    <CheckIcon color = "secondary" /><i style = {{verticalAlign: "super"}}> {data.free5}</i>
                  </div>
                  <div>
                    <CheckIcon color = "secondary" /><i style = {{verticalAlign: "super"}}> {data.free6}</i>
                  </div>
                  <div>
                    <br/>
                  </div>
                  <div>
                    <br/><br />
                  </div>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button fullWidth variant = "outlined" size="large" color="primary" onClick = {()=>history.push("/dashboard")}>
                {data.startButton}
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className = "col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/img/team/01.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {data.basicTitle}<br /><br />{data.basicPrice}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style = {{textAlign: "left", display: "inline-block"}}>
                  <div>
                    <CheckIcon color = "secondary" /><i style = {{verticalAlign: "super"}}> {data.basic1}</i>
                  </div>
                  <div>
                    <CheckIcon color = "secondary" /><i style = {{verticalAlign: "super"}}> {data.basic2}</i>
                  </div>
                  <div>
                    <CheckIcon color = "secondary" /><i style = {{verticalAlign: "super"}}> {data.basic3}</i>
                  </div>
                  <div>
                    <CheckIcon color = "secondary" /><i style = {{verticalAlign: "super"}}> {data.basic4}</i>
                  </div>
                  <div>
                    <CheckIcon color = "secondary" /><i style = {{verticalAlign: "super"}}> {data.basic5}</i>
                  </div>
                  <div>
                    <CheckIcon color = "secondary" /><i style = {{verticalAlign: "super"}}> {data.basic6}</i>
                  </div>
                  <div>
                    <CheckIcon color = "secondary" /><i style = {{verticalAlign: "super"}}> {data.basic7}</i>
                  </div>
                  <div>
                    <CheckIcon color = "secondary" /><i style = {{verticalAlign: "super"}}> {data.basic8}</i>
                  </div>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button fullWidth variant = "outlined" size="large" color="primary" onClick = {()=>history.push("/buy-space")}>
                {data.startButton}
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className = "col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/img/team/01.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {data.proTitle}<br /><br />{data.proPrice}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style = {{textAlign: "left", display: "inline-block"}}>
                  <div>
                    <CheckIcon color = "secondary" /><i style = {{verticalAlign: "super"}}> {data.pro1}</i>
                  </div>
                  <div>
                    <CheckIcon color = "secondary" /><i style = {{verticalAlign: "super"}}> {data.pro2}</i>
                  </div>
                  <div>
                    <CheckIcon color = "secondary" /><i style = {{verticalAlign: "super"}}> {data.pro3}</i>
                  </div>
                  <div>
                    <CheckIcon color = "secondary" /><i style = {{verticalAlign: "super"}}> {data.pro4}</i>
                  </div>
                  <div>
                    <CheckIcon color = "secondary" /><i style = {{verticalAlign: "super"}}> {data.pro5}</i>
                  </div>
                  <div>
                    <CheckIcon color = "secondary" /><i style = {{verticalAlign: "super"}}> {data.pro6}</i>
                  </div>
                  <div>
                    <CheckIcon color = "secondary" /><i style = {{verticalAlign: "super"}}> {data.pro7}</i>
                  </div>
                  <div>
                    <CheckIcon color = "secondary" /><i style = {{verticalAlign: "super"}}> {data.pro8}</i>
                  </div>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button fullWidth variant = "outlined" size="large" color="primary" onClick = {()=>history.push("/buy-space")}>
                {data.startButton}
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}
