import React from "react";
import { Typography, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    height: 185,
  },
  number: {
    color: "#2e0412",
    textAlign: "center",
  },
  title: {
    textAlign: "center",
  },
}));

const Box = ({ title, number, subtitle }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {title}
      </Typography>

      <div>
        {" "}
        <Typography className={classes.number} variant="h3" gutterBottom>
          {number}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {subtitle}
        </Typography>
      </div>
    </div>
  );
};

export default Box;
