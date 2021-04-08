import React from "react";
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.main,
    textAlign: "center",
    padding: theme.spacing(5, 0),
  },
  loading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
  },
}));

const AppLoading = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='xs'>
      <div className={classes.loading}>
        <Typography variant='h6' component='h2' className={classes.title}>
          Waroeng Smart
        </Typography>
        <LinearProgress />
      </div>
    </Container>
  );
};

export default AppLoading;
