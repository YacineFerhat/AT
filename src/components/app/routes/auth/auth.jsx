import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField, Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#efefef",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    margin: theme.spacing(1),
    width: "50%",
    height: "65%",
    backgroundColor: "#1a2930",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4),
  },
  title: {
    color: "white",
  },
  form: {
    marginTop: 25,
    width: "100%",
    justifyContent: "flex-start",
    display: "flex",
    color: "white",
    flexDirection: "column",
  },
  textField: {
    backgroundColor: "white",
  },
  btn: {
    marginTop: 50,
    backgroundColor: "white",
    width: 250,
    fontSize: "22px",
  },
}));

const Auth = () => {
  const classes = useStyles();
  let history = useHistory();
  const [userName, setUserName] = useState("");
  const handleSubmit = () => {
    if (userName === "yacine") {
      history.push("/dash");
    } else {
      alert("erreur");
    }
  };
  console.log(userName);
  const handleChangeUsername = (event) => {
    console.log(event.target.value);
    setUserName(event.target.value);
  };
  return (
    <section className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Typography className={classes.title} variant="h3" gutterBottom>
          Authentification
        </Typography>
        <div className={classes.form}>
          <Typography className={classes.title} variant="h5" gutterBottom>
            Nom d'utilisateur :
          </Typography>
          <TextField
            name="userName"
            onClick={handleChangeUsername}
            id="outlined-basic"
            label="Nom d'utilisateur"
            variant="outlined"
            className={classes.textField}
          />
        </div>
        <div className={classes.form}>
          <Typography className={classes.title} variant="h5" gutterBottom>
            Mot de passe :
          </Typography>
          <TextField
            className={classes.textField}
            type="password"
            id="outlined-basic"
            label="Mot de passe"
            variant="outlined"
          />
        </div>
        <Button
          onClick={handleSubmit}
          className={classes.btn}
          variant="contained"
        >
          S'authentifier
        </Button>
      </Paper>
    </section>
  );
};
export default Auth;
//#efefef
