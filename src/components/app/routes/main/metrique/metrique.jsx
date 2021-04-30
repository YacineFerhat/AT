import React from "react";
import { Typography, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "components/common/box";
import { Line } from "react-chartjs-2";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2%",
  },

  paper: {
    marginTop: 15,
    minHeight: 225,
  },
  chart: {
    padding: "2%",
    marginTop: 25,
    height: 230,
  },
  canvas: {
    height: 350,
  },
}));
const Metrique = (props) => {
  // Nombre total de donnée dans le dataset.
  // nombre total de clusters.
  // dernière récupération de données.
  // Nombre total de commentaires positifs/négatifs/neutres
  // Nombre total de postes
  //total 24184 , >0 8599, <0 7033 =0 8552
  const classes = useStyles();

  const data = {
    labels: ["03-10", "10-10", "17-10", "24-10", "31-10", "6-11"],

    datasets: [
      {
        label: "Nbr de j'aime",
        data: [632958, 634415, 635125, 639985, 641356, 643356],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: 630000,
    },
  };
  const data2 = {
    labels: ["03-10", "10-10", "17-10", "24-10", "31-10", "6-11"],
    datasets: [
      {
        label: "Nbr de j'aime",
        data: [632958, 634415, 635125, 639985, 641356, 643356],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options2 = {
    scales: {
      yAxes: 630000,
    },
  };
  return (
    <section className={classes.root}>
      <Typography variant="h3" gutterBottom>
        Métriques :
      </Typography>

      <Paper className={classes.chart}>
        <Typography className={classes.title} variant="h5" gutterBottom>
          Développements des j'aimes{" "}
        </Typography>
        <Line data={data} height={50} options={options} />
      </Paper>
    </section>
  );
};

export default Metrique;
