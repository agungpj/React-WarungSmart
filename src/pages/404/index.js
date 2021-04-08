import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
const Notfound = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='xs'>
      <Paper className={classes.paper}>
        <Typography variant='subtitle'>Halaman Tidak Ditemukan</Typography>
        <Typography variant='h3'>404</Typography>
        <Typography component={Link} to='/'>
          Kembali Ke Beranda
        </Typography>
      </Paper>
    </Container>
  );
};

export default Notfound;
