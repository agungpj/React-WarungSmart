import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import URL from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useSnackbar } from "notistack";

//validation
import isEmail from "validator/lib/isEmail";
//firebase hook
import { useFirebase } from "../../components/FirebaseProvider";

import { Link, Redirect } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import AppLoading from "../../components/apploading";

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {"Copyright © "}
      <URL color='inherit' href='https://material-ui.com/'>
        Your Website
      </URL>
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bottomLink: {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 31, 2, 0),
  },
  login: {
    margin: theme.spacing(3, 0, 2),
  },
  icon: {
    color: theme.palette.primary,
  },
}));

export default function LupaPassword() {
  const classes = useStyles();
  //snackbar sticknotes
  const { enqueueSnackbar } = useSnackbar();

  //state form
  const [form, setForm] = useState({
    email: "",
  });

  //state ketika error.
  const [error, setError] = useState({
    email: "",
  });

  //state disable form ketika submit (loading)
  const [submitting, setSubmitting] = useState(false);

  //handle change = tiap ada perubahan.
  const handleChange = (e) => {
    //catch form
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    //clear error. ketika typing
    setError({
      ...error,
      [e.target.name]: "",
    });
  };

  const { auth, user, loading } = useFirebase();
  //value dr firebase
  //ketika submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    //library validator

    const validate = () => {
      const newError = { ...error };
      //ambil seluruh error state
      if (!form.email) {
        //jika email kosong
        newError.email = "email wajib di isi!";
      } else if (!isEmail(form.email)) {
        newError.email = "email tidak valid!";
      }
      setSubmitting(false);
      return newError;
    };
    //error handle validasi
    const findErrors = validate();
    if (Object.values(findErrors).some((err) => err !== "")) {
      //jika error berisi string maka error, jika string kosong maka tidak.
      setError(validate());
    } else {
      try {
        //disable button
        setSubmitting(true);
        //doc auth firebase
        const actionCodeSettings = {
          url: `${window.location.origin}/login`,
          // ga ngerti
        };
        await auth.sendPasswordResetEmail(form.email, actionCodeSettings);
        enqueueSnackbar("Berhasil mengirim kode reset password! ", {
          variant: "success",
        });
        setSubmitting(false);
      } catch (err) {
        const newError = {};
        switch (err.code) {
          case "auth/user-not-found":
            newError.email = "pengguna tidak ditemukan";
            break;
          case "auth/invalid-email":
            newError.email = "email tidak valid";
            break;

          default:
            newError.email = "terjadi kesalahan";
        }
      }
    }
  };

  if (loading) {
    return <AppLoading />;
  }

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon className={classes.icon} />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Forgot Password
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            value={form.email}
            onChange={handleChange}
            helperText={error.email}
            //jika error maka set true, jika tidak error maka set false.
            error={error.email ? true : false}
            disabled={submitting}
          />

          <Button
            disabled={submitting}
            fullWidth
            type='submit'
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Send
          </Button>
          <Grid container align='center'>
            <Grid item xs>
              <Link to='/login' className={classes.bottomLink}>
                Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
