import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import URL from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 27, 2, 0),
  },
  login: {
    margin: theme.spacing(3, 0, 2),
  },
  icon: {
    color: theme.palette.primary,
  },
}));

export default function SignIn() {
  const classes = useStyles();

  //state form
  const [form, setForm] = useState({
    email: "",
    password: "",
    ulangi_password: "",
  });

  //state ketika error.
  const [error, setError] = useState({
    email: "",
    password: "",
    ulangi_password: "",
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

      if (!form.password) {
        newError.password = "password wajib diisi!";
      }

      if (!form.ulangi_password) {
        newError.ulangi_password = "password wajib diisi!";
      } else if (form.ulangi_password !== form.password) {
        newError.ulangi_password = "password tidak cocok!";
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
        setSubmitting(true);
        await auth.createUserWithEmailAndPassword(form.email, form.password);
      } catch (err) {
        const newError = {};
        switch (err.code) {
          case "auth/email-already-in-use":
            newError.email = "email sudah digunakan";
            break;
          case "auth/invalid-email":
            newError.email = "email tidak valid";
            break;
          case "auth/weak-password":
            newError.email = "password terlalu lemah";
            break;
          case "auth/operation-not-allowed":
            newError.email = "metode tidak didukung";
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
          Create New Account
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
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            value={form.password}
            onChange={handleChange}
            helperText={error.password}
            error={error.email ? true : false}
            disabled={submitting}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='ulangi_password'
            label='Confirm Password'
            type='password'
            id='ulangi_password'
            value={form.ulangi_password}
            onChange={handleChange}
            helperText={error.ulangi_password}
            error={error.email ? true : false}
            disabled={submitting}
          />

          <Button
            disabled={submitting}
            type='submit'
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Register
          </Button>
          <Button
            disabled={submitting}
            component={Link}
            type='submit'
            to='/login'
            variant='contained'
            color='primary'
            className={classes.login}
          >
            Login
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
