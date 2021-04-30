import React from "react";
import { Typography, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "components/common/box";
import { Doughnut } from "react-chartjs-2";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2%",
  },

  paper: {
    marginTop: 25,
    minHeight: 225,
  },
  chart: {
    padding: "2%",
    marginTop: 25,
    height: 450,
  },
  canvas: {
    height: 350,
  },
}));
const Dashboard = (props) => {
  // Nombre total de donnée dans le dataset.
  // nombre total de clusters.
  // dernière récupération de données.
  // Nombre total de commentaires positifs/négatifs/neutres
  // Nombre total de postes
  //total 24184 , >0 8599, <0 7033 =0 8552
  const classes = useStyles();

  const data = {
    labels: ["Négatifs", "Neutres", "Positifs"],
    datasets: [
      {
        label: "# of Votes",
        data: [70330, 85520, 85990],
        backgroundColor: [
          "rgba(255, 99, 132, 0.9)",
          "rgba(54, 162, 235, 0.9)",
          "rgba(75, 192, 192, 0.9)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <section className={classes.root}>
      <Typography variant="h3" gutterBottom>
        Tableau de bord
      </Typography>
      <Grid container spacing={3}>
        <Grid item md={3} xs={12} className={classes.grid}>
          <Paper className={classes.paper}>
            <Box
              title="Taille du data set"
              subtitle="commentaires"
              number="241840"
            />
          </Paper>
          <Paper className={classes.paper}>
            <Box
              title="Nombre total de postes"
              subtitle="postes"
              number="736"
            />
          </Paper>
        </Grid>
        <Grid item md={3} xs={12}>
          <Paper className={classes.paper}>
            <Box title="Nombre total de KPI" subtitle="kpi" number="4" />
          </Paper>
          <Paper className={classes.paper}>
            <Box title="Dernier ajout" number="06-11-2020" />
          </Paper>
        </Grid>
        <Grid item md={6} xs={12}>
          <Paper className={classes.chart}>
            <Typography className={classes.title} variant="h5" gutterBottom>
              Distribution des commentaires
            </Typography>
            <Doughnut width={700} height={500} data={data} />
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
};

export default Dashboard;
