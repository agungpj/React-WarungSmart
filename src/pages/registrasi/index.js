import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";

const Registrasi = () => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.blue}>Welcome Material UI</h1>
      <Button color='primary' variant='contained'>
        hmmmm
      </Button>
    </div>
  );
};

export default Registrasi;
